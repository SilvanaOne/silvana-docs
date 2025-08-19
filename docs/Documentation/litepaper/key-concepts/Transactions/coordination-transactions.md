---
sidebar_position: 2
slug: /Documentation/key-concepts/Transactions/coordination-transactions
---


# Coordination Transaction

A **Coordination Transaction** is the core execution process in Silvana’s [**Coordination Layer**](/Documentation/architecture/Layers/coordination-layer) - a high-throughput, low-latency blockchain responsible for **orchestrating** and **sequencing** user-defined logic across the stack. After a proof is generated, this layer ensures the pipelined transaction is ordered, executed, and recorded as part of the rollup’s state progression and runs in the following flow:

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

Example of a [**Coordination Transaction**](https://suiscan.xyz/devnet/tx/6q7TMPiiprQAShsRkoVEJYRLVbvq8CL5bsWbL6MWYmTm).

:::tip Note
Coordination Layer is Silvana’s key innovation underpinning the [**Silvana Rollup**](/Documentation/ultra-fast-rollup/silvana-rollup), known for showing the ultra-fast transaction execution of **optimistic rollups** and the security of **zk rollups**. Coordination Layer ensures near-instant transactions by running execution on fast blockchains.
:::

Get insights into Coordination Transactions by exploring them on [**Silvascan**](https://silvascan.io/testnet/coordination-txs).

## Metadata

As a user transaction runs with a provable record, its metadata is logged to establish links between all transaction types. Each settlement transaction is associated with:

* A unique L1 hash;
* A block number and nonce;
* The associated proof digest (e.g., **_`proof_data_availability_digest`_**);
* Any referenced coordination hash or data availability fields.

**Custom transaction metadata includes**:
* **_`blockNumber`_**: Coordination-layer block index (28)
* **_`number_of_transactions`_**: How many settlement transactions this proof supports (3)
* **_`sequences`_**: The range of coordination transaction sequence numbers covered ([49, 51])
* **_`settlement_hash`_**: The L1 state commitment (Mina devnet) updated by this proof
* **_`nonce`_**: A unique job identifier (626)
* **_`proof_data_availability`_**: CID for the proof payload used for DA
* **_`proof_data_availability_digest`_**: Coordination-layer event reference for DA
* **_`au_proof_data_availability`_**: Additional proof DA CID (for aggregated proofs)
* **_`coordination_hash`_**: The new rollup state commitment on the coordination layer
* **_`linkId`_**: A reference tying this metadata record back to the agent job (ID "28").

Through this process, Silvana guarantees state **anchoring**, **verifiability**, and **data retrievability**. Even if internal Silvana infrastructure were to fail, any third party could reconstruct and verify the rollup’s state using public data and L1 commitments.
