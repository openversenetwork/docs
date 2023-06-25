import ProjectValue from '@site/src/components/ProjectValue';

# Openverse CLI

`versed` is the all-in-one command-line interface (CLI). It allows you to run an Openverse node, manage wallets and interact
 with the Openverse network through queries and transactions. This introduction will explain how to install the `versed`
 binary onto your system and guide you through some simple examples how to use versed.

## Prerequisites

#### Go

Openverse is built using [Go](https://golang.org/dl/) version `1.20+`. Check your version with:

```bash
go version
```

Once you have installed the right version, confirm that your [`GOPATH`](https://golang.org/doc/gopath_code#GOPATH)
 is correctly configured by running the following command and adding it to your shell startup script:

```bash
export PATH=$PATH:$(go env GOPATH)/bin
```

#### jq

Openverse scripts are using [jq](https://stedolan.github.io/jq/download/) version `1.6+`. Check your version with:

```
jq --version
```

## Installation

You can build and install the `versed` binaries from source or using Docker.

### Build From Source

Clone and build the Openverse from source using `git`. The `<tag>` refers to a release tag on Github. The latest Openverse
 [version](https://github.com/openverse/openverse/releases) is <ProjectValue keyword='latest_version'/>:

```bash
git clone https://github.com/openverse/openverse.git
cd openverse
git fetch
git checkout <tag>
make install
```

After installation is done, check that the versed binaries have been successfully installed:

```bash
versed version
```

:::info
If the `versed: command not found` error message is returned, confirm that you have configured [Go](#go) correctly.
:::

### Docker

When it comes to using Docker with Openverse, there are two options available:
Build a binary of the Openverse daemon inside a dockerized build environment
or build a Docker image, that can be used to spin up individual containers running the Openverse binary.
For information on how to achieve this,
proceed to the dedicated page on [working with Docker](./docker-build.md).

## Run an Openverse node

To become familiar with Openverse, you can run a local blockchain node that produces blocks and exposes EVM and Cosmos
endpoints. This allows you to deploy and interact with smart contracts locally or test core protocol functionality.

Run the local node by executing the `local_node.sh` script in the base directory of the repository:

```bash
./local_node.sh
```

The script stores the node configuration including the local default endpoints under `~/.tmp-versed/config/config.toml`.
If you have previously run the script, the script allows you to overwrite the existing configuration and start a new
local node.

Once your node is running you will see it validating and producing blocks in your local Openverse blockchain:

```bash
12:59PM INF executed block height=1 module=state num_invalid_txs=0 num_valid_txs=0 server=node
# ...
1:00PM INF indexed block exents height=7 module=txindex server=node
```

For more information on how to customize a local node,
head over to the [Single Node](single-node.md) page.

## Using `versed`

After installing the `versed` binary, you can run commands using:

```bash
versed [command]
```

There is also a `-h`, `--help` command available

```bash
versed -h
```

It is possible to maintain multiple node configurations at the same time. To specify a configuration use the `--home`
flag. In the following examples we will be using the default config for a local node, located at `~/.tmp-versed`.

### Manage wallets

You can manage your wallets using the versed binary to store private keys and sign transactions over CLI. To view all
keys use:

```bash
versed keys list \
--home ~/.tmp-versed \
--keyring-backend test

# Example Output:
# - address: openverse19xnmslvl0pcmydu4m52h2gf0std5ee5pfgpyuf
#   name: dev0
#   pubkey: '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"AzKouyoUL0UUS1qRUZdqyVsTPkCAFWwxx3+BTOw36nKp"}'
#   type: local
```

You can generate a new key/mnemonic with a `$NAME` with:

```bash
versed keys add [name] \
--home ~/.tmp-versed \
--keyring-backend test
```

To export your openverse key as an Ethereum private key (for use with [Metamask](./../../../use/connect-your-wallet/metamask)
 for example):

```bash
versed keys unsafe-export-eth-key [name] \
--home ~/.tmp-versed \
--keyring-backend test
```

For more about the available key commands, use the `--help` flag

```bash
versed keys -h
```

:::tip
For more information about the Keyring and its backend options, click [here](../concepts/keyring.md).
:::

### Interact with a Network

You can use versed to query information or submit transactions on the blockchain. Queries and transactions are requests
 that you send to an Openverse node through the Tendermint RPC.

:::tip
👉 To use the CLI, you will need to provide a Tendermint RPC address for the `--node` flag.
Look for a publicly available addresses for testnet and mainnet in the [Networks](./../../develop/api/networks) page.
:::

#### Set Network Config

In the local setup the node is set to `tcp://localhost:26657`. You can view your node configuration with:

```bash
versed config \
--home ~/.tmp-versed
# Example Output
# {
# 	"chain-id": "openverse_9000-1",
# 	"keyring-backend": "test",
# 	"output": "text",
# 	"node": "tcp://localhost:26657",
# 	"broadcast-mode": "sync"
# }
```

You can set your node configuration to send requests to a different network by changing the endpoint with:

```bash
versed config node [tendermint-rpc-endpoint] \
--home ~/.tmp-versed
```

Learn about more node configurations [here](configuration.mdx).

#### Queries

You can query information on the blockchain using `versed query` (short `versed q`). To view the account balances by its
 address stored in the bank module, use:

```bash
versed q bank balances [adress] \
--home ~/.tmp-versed
# # Example Output:
# balances:
# - amount: "99999000000000000000002500"
#   denom: aopenverse
```

To view other available query commands, use:

```bash
# for all Queries
versed q

# for querying commands in the bank module
versed q bank
```

#### Transactions

You can submit transactions to the network using `versed tx`. This creates, signs and broadcasts a tx in one command. To
 send tokens from an account in the keyring to another address with the bank module, use:

```bash
versed tx bank send [from_key_or_address] [to_address] [amount] \
--home ~/.tmp-versed \
--fees 50000000000aopenverse \
-b block

# Example Output:
# ...
# txhash: 7BA2618295B789CC24BB13E654D9187CDD264F61FC446EB756EAC07AF3E7C40A
```

To view other available transaction commands, use:

```bash
# for all transaction commands
versed tx

# for Bank transaction subcommands
versed tx bank
```

Now that you've learned the basics of how to run and interact with an Openverse network,
head over to [configurations](configuration.mdx) for futher customization.
