---
sidebar_position: 4
---

# Settlement Transaction

After successful execution, the Coordination Layer sends the recursive proof to the [**Settlement Layer**](/Documentation/architecture/Layers/settlement-layer) and initiates a Settlement Transaction, where the recursive (aggregated) proof is checked and validated by the validator set on the Settlement blockchain.

It normally takes time since zk proof generation is CPU-heavy, so the [**finality**](/Documentation/glossary#finality) isn’t fast and happens way later than the pipelined transaction is executed. However, just for the same reason, the chance of a proof being tampered with is vanishingly small, so the finality, albeit being slow, is guaranteed, which in fact means that the transaction is not only **instant** but also **secure**.

:::tip Note
In practice, a single transaction may not be sufficient for settlement, especially when multiple proofs or large data blobs are involved. Silvana supports splitting the settlement into **multiple L1 transactions**, each responsible for either uploading data, invoking proof verification, or updating contract state. This modular settlement structure accommodates [**L1**](/Documentation/glossary#layer-1-l1) constraints such as calldata limits and contract logic constraints.
:::

Settlement is performed by submitting one or more **on-chain transactions** to a zkApp contract or equivalent smart contract interface. These transactions perform the following:

* Retrieve proof artifacts from the public store (via IPFS CIDs)
* Validate the submitted zkProofs
* Update the L1’s internal state commitment to match the rollup’s new state
* Emit state update and proof verification events

Upon completion, the final state commitment on L1 (often labeled **_`settlement_hash`_**) must match the coordination layer’s final rollup state (**_`coordination_hash`_**). This consistency guarantees that:

* All prior computations were valid and sequenced correctly;
* The L1 contract now holds an authoritative record of the rollup state;
* Future state transitions must build upon this commitment.