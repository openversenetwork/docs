---
sidebar_position: 3
---

# Automated Upgrades

We highly recommend validators use Cosmovisor to run their nodes. This will make low-downtime upgrades smoother, as validators don't have to [manually upgrade](./manual-upgrades) binaries during the upgrade. Instead users can [pre-install](#manual-download) new binaries, and Cosmovisor will automatically update them based on on-chain Software Upgrade proposals.

>[`cosmovisor`](https://docs.cosmos.network/main/tooling/cosmovisor) is a small process manager for Cosmos SDK application binaries that monitors the governance module for incoming chain upgrade proposals. If it sees a proposal that gets approved, cosmovisor can automatically download the new binary, stop the current binary, switch from the old binary to the new one, and finally restart the node with the new binary.

## Prerequisites

- [Install Cosmovisor](https://docs.cosmos.network/main/tooling/cosmovisor#installation)

## 1. Setup Cosmovisor

Set up the Cosmovisor environment variables. We recommend setting these in your `.profile` so it is automatically set in every session.

```bash
echo "# Setup Cosmovisor" >> ~/.profile
echo "export DAEMON_NAME=versed" >> ~/.profile
echo "export DAEMON_HOME=$HOME/.versed" >> ~/.profile
source ~/.profile
```

After this, you must make the necessary folders for `cosmosvisor` in your `DAEMON_HOME` directory (`~/.versed`) and copy over the current binary.

```bash
mkdir -p ~/.versed/cosmovisor
mkdir -p ~/.versed/cosmovisor/genesis
mkdir -p ~/.versed/cosmovisor/genesis/bin
mkdir -p ~/.versed/cosmovisor/upgrades

cp $GOPATH/bin/versed ~/.versed/cosmovisor/genesis/bin
```

To check that you did this correctly, ensure your versions of `cosmovisor` and `versed` are the same:

```bash
cosmovisor run version
versed version
```

## 2. Download the Openverse release

### Manual Download

Cosmovisor will continually poll the `$DAEMON_HOME/data/upgrade-info.json` for new upgrade instructions. When an upgrade is [released](https://github.com/openverse/openverse/releases), node operators need to:

1. Download (**NOT INSTALL**) the binary for the new release
2. Place it under `$DAEMON_HOME/cosmovisor/upgrades/<name>/bin`, where `<name>` is the URI-encoded name of the upgrade as specified in the Software Upgrade Plan.

**Example**: for a `Plan` with name `v3.0.0` with the following `upgrade-info.json`:

```json
{
    "binaries": {
        "darwin/arm64": "https://github.com/openverse/openverse/releases/download/v3.0.0/openverse_3.0.0_Darwin_arm64.tar.gz",
        "darwin/x86_64": "https://github.com/openverse/openverse/releases/download/v3.0.0/openverse_3.0.0_Darwin_x86_64.tar.gz",
        "linux/arm64": "https://github.com/openverse/openverse/releases/download/v3.0.0/openverse_3.0.0_Linux_arm64.tar.gz",
        "linux/amd64": "https://github.com/openverse/openverse/releases/download/v3.0.0/openverse_3.0.0_Linux_amd64.tar.gz",
        "windows/x86_64": "https://github.com/openverse/openverse/releases/download/v3.0.0/openverse_3.0.0_Windows_x86_64.zip"
    }
}
```

Your `cosmovisor/` directory should look like this:

```shell
cosmovisor/
├── current/   # either genesis or upgrades/<name>
├── genesis
│   └── bin
│       └── versed
└── upgrades
    └── v3.0.0
        ├── bin
        │   └── versed
        └── upgrade-info.json
```

### Automatic Download

:::warning
**NOTE**: Auto-download doesn't verify in advance if a binary is available. If there will be any issue with downloading a binary, `cosmovisor` will stop and won't restart an the chain (which could lead it to a halt).
:::

It is possible to have Cosmovisor [automatically download](https://docs.cosmos.network/main/tooling/cosmovisor#auto-download) the new binary. Validators can use the automatic download option to prevent unnecessary downtime during the upgrade process. This option will automatically restart the chain with the upgrade binary once the chain has halted at the proposed `upgrade-height`. The major benefit of this option is that validators can prepare the upgrade binary in advance and then relax at the time of the upgrade.

To set the auto-download use set the following environment variable:

```bash
echo "export DAEMON_ALLOW_DOWNLOAD_BINARIES=true" >> ~/.profile
```

## 3. Start your node

Now that everything is setup and ready to go, you can start your node.

```bash
cosmovisor run start
```

You will need some way to keep the process always running. If you're on linux, you can do this by creating a service.

```bash
sudo tee /etc/systemd/system/versed.service > /dev/null <<EOF
[Unit]
Description=Openverse Daemon
After=network-online.target

[Service]
User=$USER
ExecStart=$(which cosmovisor) start
Restart=always
RestartSec=3
LimitNOFILE=infinity

Environment="DAEMON_HOME=$HOME/.versed"
Environment="DAEMON_NAME=versed"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"

[Install]
WantedBy=multi-user.target
EOF
```

Then update and start the node

```bash
sudo -S systemctl daemon-reload
sudo -S systemctl enable versed
sudo -S systemctl start versed
```

You can check the status with:

```bash
systemctl status versed
```