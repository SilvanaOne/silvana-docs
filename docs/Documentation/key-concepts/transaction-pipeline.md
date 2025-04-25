---
sidebar_position: 3
---
# Transaction Pipeline
## Overview

The notion of a **"transaction"** extends beyond a singular atomic operation in Silvana. Unlike monolithic systems that rely on centralized consensus or tightly coupled execution, Silvana's architecture enables each component of the transaction pipeline to operate **independently**, **asynchronously**, and on **different infrastructural backends**. 

A real-life use case is normally broken down into more atomic operations since it includes smaller pieces of business logic. Each such operation is run separately according to the business logic deployed in the corresponding module, and later is bundled in a holistic user transaction. 

## Transaction Pipeline

Each transaction is decomposed into **multiple sub-transactions** that run on different layers of the network and follows this pipeline: 
* **Proof Transaction**;
* **Coordination Transaction**;
* **Settlement Transaction**;
* **DA Transaction**. 

The diagram below illustrates the Transaction Pipeline in Silvana:

![Transaction Pipeline](..\key-concepts\img\transaction-pipeline.png)

The table below provides some basic information about transaction types in Silvana:

| Transaction              | Layer                              | Function                                                                 |
|--------------------------|-------------------------------------|--------------------------------------------------------------------------|
| Proof Transaction        | Silvana Core                        | Proof generation                                                         |
| Coordination Transaction | Coordination Layer (Silvana Rollup)| • Transaction ordering and sequencing; <br/>• Execution of atomic custom logic; <br/>• Proof aggregation; <br/>• Transaction acceleration. |
| Settlement Transaction   | Settlement Layer                    | • Checking and validating recursive proofs                               |
| DA Transaction           | Data Availability (DA) Layer        | • Provable record state mutation; <br/>• Generating proof of the state mutation; <br/>• Proof storage. |

## Proof Transaction

The first transaction in the pipeline In Silvana - Proof Transaction - runs in a prover, be it the Prover in the Silvana Core, or any other type of prover involved. For more information on how zk proofs are generated, see these docs: [**Zk Proofs**](/Documentation/key-concepts/zk-proofs) and [**Prover**](/Documentation/architecture/silvana-core/prover).

:::tip Multi-Proof Generation
Silvana supports **multi-proof generation** per transaction job, often producing several proofs to enable parallelism and fine-grained execution tracking.
:::

This proof stage is computationally intensive and typically lasts a few minutes per job. The agent logs record the runtime and timestamps for each step. Once proof generation concludes, the [**agent**](/Documentation/Deployment/agents) prepares metadata including proof references, transaction payload digests, and initial coordination instructions. 

Below is an example of what a generated proof looks like:

```json
{3 items
 "storage":{5 items
 "chain":string"pinata"
 "network":string"public"
 "hash":string"bafkreigbqn5qhiuotw2aghemicazk6akvlmlaiirhlp5nfg3ffsmtzpnum"
  "custom":{9 items
  "blockNumber":int28
  "number_of_transactions":int3
   "sequences":[2 items
   0:int49
   1:int51
  ]
  "settlement_hash":string"5JtfJN5VFHoJzTg9xow1DS62xtxxsBuDmz36CxPjXeCZafDi5h9j"
  "nonce":int626
  "proof_data_availability":string"bafkreigbqn5qhiuotw2aghemicazk6akvlmlaiirhlp5nfg3ffsmtzpnum"
  "proof_data_availability_digest":string"EbRbSLAB3FWJjLTfMxfBHaRw6tMeSuti8TMiH3GwcRMp"
  "au_proof_data_availability":string"bafkreiavedzukbimf7l2e52lpuwkogi6w7ndzm6krxdtmmm57xwtzxn2ne"
  "coordination_hash":string"Eaoq5gcwjJwFpjq9fmMtRyuVpHJbEwjJEEBSEdNjkkkk"
 }
 "linkId":string"28"
}
 "custom":{9 items
 "blockNumber":int28
 "number_of_transactions":int3
  "sequences":[2 items
  0:int49
  1:int51
 ]
  "settlement_hash":string"5JtfJN5VFHoJzTg9xow1DS62xtxxsBuDmz36CxPjXeCZafDi5h9j"
  "nonce":int626
  "proof_data_availability":string"bafkreigbqn5qhiuotw2aghemicazk6akvlmlaiirhlp5nfg3ffsmtzpnum"
  "proof_data_availability_digest":string"EbRbSLAB3FWJjLTfMxfBHaRw6tMeSuti8TMiH3GwcRMp"
  "au_proof_data_availability":string"bafkreiavedzukbimf7l2e52lpuwkogi6w7ndzm6krxdtmmm57xwtzxn2ne"
  "coordination_hash":string"Eaoq5gcwjJwFpjq9fmMtRyuVpHJbEwjJEEBSEdNjkkkk"
 }
 "linkId":string"28"
}
```

## Coordination Transaction

A Coordination Transaction is the core execution unit in Silvana’s [**Coordination Layer**](/Documentation/architecture/Layers/coordination-layer) - a high-throughput, low-latency blockchain responsible for **orchestrating** and **sequencing** user-defined logic across the stack. After a proof is generated, this layer ensures the transaction is ordered, executed, and recorded as part of the rollup’s state progression and runs in the following flow:

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

## Settlement Transaction

After successful execution, the Coordination Layer sends the recursive proof to the [**Settlement Layer**](/Documentation/architecture/Layers/settlement-layer) and initiates a Settlement Transaction, where the recursive (aggregated) proof is checked and validated by the validator set on the Settlement blockchain.

It normally takes time since zk proof generation is CPU-heavy, so the **finality** isn’t fast and happens way later than the transaction is executed. However, just for the same reason, the chance of a proof being tampered with is vanishingly small, so the finality, albeit being slow, is guaranteed, which in fact means that the transaction is not only **instant** but also **secure**.

:::tip Note
In practice, a single transaction may not be sufficient for settlement, especially when multiple proofs or large data blobs are involved. Silvana supports splitting the settlement into **multiple L1 transactions**, each responsible for either uploading data, invoking proof verification, or updating contract state. This modular settlement structure accommodates [**L1**](/Documentation/glossary#layer-1-l1) constraints such as calldata limits and contract logic constraints.
:::

Settlement is performed by submitting one or more **on-chain transactions** to a zkApp contract or equivalent smart contract interface. These transactions perform the following:

* Retrieve proof artifacts from the public store (via IPFS CIDs)
* Validate the submitted zkProofs
* Update the L1’s internal state commitment to match the rollup’s new state
* Emit state update and proof verification events

Upon completion, the final state commitment on L1 (often labeled `settlement_hash`) must match the coordination layer’s final rollup state (`coordination_hash`). This consistency guarantees that:

* All prior computations were valid and sequenced correctly;
* The L1 contract now holds an authoritative record of the rollup state;
* Future state transitions must build upon this commitment.

## DA Transaction

The final stage of the lifecycle occurs on the [**Data Availability (DA) Layer**](/Documentation/architecture/Layers/data-availability-layer), anchored to a public Layer 1 blockchain. This stage ensures that the transaction data, along with its proof artifacts, are permanently recorded and verifiable on-chain.

As a transaction runs with a [**provable record**](/Documentation/key-concepts/provable-records), its state is mutated, for which a proof is generated. Then the proofs are stored in the DA Layer.

## Metadata

As a user transaction runs with a provable record, its metadata is logged to establish links between all transaction types. Each settlement transaction is associated with:

* A unique L1 hash;
* A block number and nonce;
* The associated proof digest (e.g., `proof_data_availability_digest`);
* Any referenced coordination hash or data availability fields.

**Transaction metadata includes**:

**Storage details**:
* `chain`: Pinata (IPFS backend)
* `network`: Public visibility
* `hash`: The IPFS CID where the proof is stored

**Custom metadata**:
* `blockNumber`: Coordination-layer block index (28)
* `number_of_transactions`: How many settlement transactions this proof supports (3)
* `sequences`: The range of coordination transaction sequence numbers covered ([49, 51])
* `settlement_hash`: The L1 state commitment (Mina devnet) updated by this proof
* `nonce`: A unique job identifier (626)
* `proof_data_availability`: CID for the proof payload used for DA
* `proof_data_availability_digest`: Coordination-layer event reference for DA
* `au_proof_data_availability`: Additional proof DA CID (for aggregated proofs)
* `coordination_hash`: The new rollup state commitment on the coordination layer
* `linkId`: A reference tying this metadata record back to the agent job (ID “28”).

Through this process, Silvana guarantees state **anchoring**, **verifiability**, and **data retrievability**. Even if internal Silvana infrastructure were to fail, any third party could reconstruct and verify the rollup’s state using public data and L1 commitments.