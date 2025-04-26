---
sidebar_position: 2
---


# Coordination Transaction

A Coordination Transaction is the core execution unit in Silvana’s [**Coordination Layer**](/Documentation/architecture/Layers/coordination-layer) - a high-throughput, low-latency blockchain responsible for **orchestrating** and **sequencing** user-defined logic across the stack. After a proof is generated, this layer ensures the pipelined transaction is ordered, executed, and recorded as part of the rollup’s state progression and runs in the following flow:

* **Transaction sequencing**: determines execution order for smart contracts tied to user-defined logic.
* **Execution coordination**: triggers contract calls on the Execution Layer according to the sequence.
* **Proof handling**: accepts cryptographic proofs and metadata from Agents; optionally performs recursive proof aggregation (Merge Execution) to reduce settlement payloads.
* **Event emission**: emits transaction-level events for downstream processing and traceability.
* **State progression**: computes the intermediate rollup state commitment and tracks proof-to-coordination references.

Each Coordination Transaction Includes:
* a unique transaction hash;
* a coordination-specific block number;
* a reference list of proof CIDs';
* an intermediate coordination hash representing the rollup’s current state.

:::tip Note
Coordination Layer is Silvana’s key innovation underpinning the [**Silvana Rollup**](/Documentation/ultra-fast-rollup/silvana-rollup), known for showing the ultra-fast transaction execution of **optimistic rollups** and the security of **zk rollups**. Coordination Layer ensures near-instant transactions by running execution on fast blockchains.
:::

Get insights into Coordination Transactions by exploring them on [**Silvascan**](https://silvascan.io/testnet/coordination-txs).
