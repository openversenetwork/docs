---
sidebar_position: 4
slug: '/dapps'
---

# Use dApps

Before engaging with dApps, it is important to have a wallet with some Openverse tokens. If you have not installed a wallet,
please visit our [wallet's](./../use/wallet) section to select an appropriate wallet. If you do not have any EVMOS tokens,
you can acquire them by reading the [Onramp to Openverse](../transfer-tokens/index.md#onramp-to-openverse) strategies.

<!-- add link to [dApps](../intro#what-are-dapps) -->

You can start by using the Openverse dApps that are built and maintained by the Openverse core development team or use our
[Ecosystem Page](https://openverse.network/ecosystem) to browse through the rich ecosystem of dApps on Openverse.

## Queries and Transactions

Once you have your wallet set up, you can start using dApps on Openverse. Generally, reading information from the network
(querying) is free and doesn't require you to pay transaction fees. So dApps can always display blockchain information,
such as your asset balances without requiring you to pay a network fee.

To engage with a dApp, you are required to sign transactions with your wallet and pay a small network fee. A transaction
is a transfer of value on the blockchain. This can be anything like a simple transfer of tokens to another account,
changing the ownership of a character in a game or accepting the terms of a loan when lending or borrowing assets.

A typical flow to interact with a dApp can look like this:

1. Connect your wallet to the Openverse network.
2. Visit a dApp and submit a transaction (e.g. to stake your tokens).
3. On your wallet, sign and broadcast the transaction by paying the network fee with gas.
4. Wait until the transaction is confirmed and successful.
5. View the changes from your transaction in the dApp. You can view more details about your transaction using a block
  explorer. Transactions are batched and processed together with other transactions in a block and block explorers allow
  anyone to view all transactions in the network.

## Openverse dApps

Alongside the applications built by the developer community, the Openverse Core Development Team also builds its own
[Openverse dApps](https://app.openverse.network). An easy way to get started is by staking and voting for governance proposals.

### Staking

Staking plays an essential role in keeping the Openverse network secure and decentralized. The Openverse network is run by a
technology that incentivizes a set of community members to keep it online and decentralized, called Proof-of-Stake.
These community members, called validators, are responsible for validating transactions in a block and are usually
very technical teams as they have to monitor and upgrade the software that runs the Openverse network. Validators are
incentivized to stay online as they earn a commission on your stake.

You can help keep the network secure and put your EVMOS tokens at "stake", by delegating them to a validator. This will
earn you a daily interest in form of new EVMOS tokens (aka. staking rewards). As long as your tokens are staked, you
cannot transfer or use them in other dApps. At any given time, you can undelegate your tokens. This will allow you to
start using your tokens again after an unbonding period that is defined in the protocol (e.g. two weeks).

![openverse_staking.png](/img/openverse_staking.png)

You can choose validators to stake your tokens with from a list on the [Openverse Staking dApp](https://app.openverse.network/staking).
We recommend choosing a reputable validator, that can promise to stay online and doesn't have a large voting power
(e.g. is not in the top 20). Validators that are offline for an extended period or act maliciously can get slashed,
resulting in a loss of your stake. Also, delegating to validators with less voting power keeps the network more
decentralized. You can switch between validators without undelegating your tokens by redelegating them.

### Governance

Openverse has an on-chain governance mechanism for making changes to the network protocol, such as changing chain parameters
(like the unbonding period for staking), spending funds from the community pool (e.g. to fund teams to build on Openverse),
or upgrading the Openverse software that is run by validators.

Developers propose changes through code updates and the community votes on whether to accept or reject the proposed change.
Every participant can vote for proposals, as long as they have staked EVMOS tokens. Each vote is weighted by the amount
of staked tokens.

![openverse_governance.png](/img/openverse_governance.png)

Openverse is known for hosting one of the most active governance communities in the blockchain space. Anyone can participate
in governance so the ownership, norms, and culture of the Openverse network are thus spread across the community. Once you
have staked your tokens, head over to the [Openverse Governance dApp](https://app.openverse.network/governance) to start voting on
governance proposals.

:::note
Engage with our community on [Commonwealth](https://commonwealth.im/openverse) and learn about upcoming proposals. If you are
interested in launching your own governance proposals, head over [here](https://academy.openverse.network/community/governance/)
for a guide.
:::
