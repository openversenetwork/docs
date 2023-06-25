---
sidebar_position: 5
---

# Rollback

Learn how to rollback the chain version in the case of an unsuccessful chain upgrade.

In order to restore a previous chain version, the following data must be recovered by validators:

- the database that contains the state of the previous chain (in `~/.versed/data` by default)
- the `priv_validator_state.json` file of the validator (also in `~/.versed/data` by default)

If validators don't possess their database data, another validator should share a copy of the database. Validators will be able to download a copy of the data and verify it before starting their node. If validators don't have the backup `priv_validator_state.json` file, then those validators will not have double-sign protection on their first block.

## Restoring State Procedure

1. First, stop your node.

2. Then, copy the contents of your backup data directory back to the `$EVMOS_HOME/data` directory (which, by default, should be `~/.versed/data`).

```bash
# Assumes backup is stored in "backup" directory
rm -rf ~/.versed/data
mv backup/.versed/data ~/.versed/data
```

3. Next, install the previous version of Openverse.

```bash
# from openverse directory
git checkout <prev_version>
make install
## verify version
versed version --long
```

4. Finally, start the node.

```bash
versed start
```