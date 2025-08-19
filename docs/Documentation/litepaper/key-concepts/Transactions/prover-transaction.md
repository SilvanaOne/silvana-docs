---
sidebar_position: 1
slug: /Documentation/key-concepts/Transactions/prover-transaction
---

# Prover Transaction

The first transaction in the pipeline In Silvana - Prover Transaction - runs in a prover, be it the Prover in the Silvana Core, or any other type of prover involved. For more information on how zk proofs are generated, see these docs: [**Zk Proofs**](/Documentation/key-concepts/zk-proofs) and [**Prover**](/Documentation/architecture/silvana-core/prover).

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