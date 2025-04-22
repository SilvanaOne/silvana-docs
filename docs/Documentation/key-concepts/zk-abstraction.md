---
sidebar_position: 3
---
# zk Abstraction
## Why Abstraction?
Zero-knowledge proofs (ZKPs) enable privacy-preserving computation, but implementing them is technically challenging due to:
* high technological complexity;

* heavy burden on computational power;
* high proving and settlement costs;
* key management and verification complexities;
* multiple zk proving systems and functions without a unified zk layer.

Silvana addresses this by abstracting ZK complexity across its stack. Silvana's zk-Abstraction is a foundational part of its architecture, allowing developers to build secure, private, and trustless applications without needing to understand or implement zero-knowledge proofs directly. That’s exactly what Silvana abstraction includes:
* Proof system abstraction;
* Execution abstraction;
* Settlement abstraction;
* Coordination abstraction;
* Data availability abstraction.

## Proof System Abstraction

Silvana Core provides a Prover (for zk-proof generation) and a Verifier (for proof verification) as built-in services. Instead of hand-crafting arithmetic circuits or dealing with elliptic curve math, a developer writes high-level Prover Program (zero-knowledge programs representing the proof logic) in a familiar format. Then compiles and proves these programs under the hood. This means the developer can focus on business logic and constraints, while Silvana handles witness generation, proof creation, and verification keys internally.

Silvana decouples proof generation from the application logic. Developers define their logic using Prover Programs, and the system takes care of compiling, executing, and proving that logic without exposing low-level details.

## Application Binary Interface (ABI)

Silvana’s Application Binary Interface (ABI) further abstracts the way developers interact with ZK programs and provable records. In Silvana, the ABI component of Silvana Core is responsible for “building, compiling, sending, and monitoring transactions.” 

This means developers can construct transactions using familiar structures (JSON payloads, function calls, etc.), and the ABI will handle encoding this data, attaching any required proof metadata, and dispatching it to the Silvana network. 

## Settlement Abstraction

Silvana’s settlement abstraction ensures that all state changes and proofs eventually get anchored on a secure blockchain (Layer-1 or Layer-2) without requiring the developer to handle those details. In a rollup architecture, a Settlement Layer typically refers to the base chain contract that validates proofs and stores the canonical state root. 

In fact, Silvana is described as “chain-agnostic” – it can work with various L1s or L2s (such as Mina, Zeko, Sui, Solana, etc.) to settle transactions. This means the same application code can run while Silvana handles connecting to the appropriate blockchain in the background​file-g3an52zlkdax8ynawv3xyf.

Silvana integrates with existing blockchains for settlement rather than making the developer write custom contracts for each deployment.

## Coordination Abstraction

Coordinating the flow of transactions and proofs in a ZK system can be complex. Silvana addresses this with a Coordination Layer that acts as the sequencer and orchestrator for the rollup. The coordination abstraction means developers do not write their own logic for ordering transactions, managing mempools, or triggering proofs - Silvana’s coordination layer handles all that and presents a simplified model to the developer.

The Coordination Layer in Silvana is responsible for taking incoming transactions, validating them quickly, executing them, and eventually finalizing them with proofs. Internally, Silvana’s rollup execution goes through multiple phases (modes) to balance speed and security​:
* Submission Execution
* Operators Execution (no-proof mode)
* Provable Execution
* Merge Execution

All these steps are automated by Silvana. The developer sees a smooth experience: when they submit a transaction, Silvana will sequence it (order it with respect to others), execute it (so the effect is obtained), and later finalize it with a proof. The coordination abstraction means the developer doesn’t have to worry about double-spending, race conditions, or waiting for proofs.

## Data Availability (DA) Abstraction

Silvana provides a Data Availability Layer that stores transaction data and state in a decentralized way, and it abstracts this such that developers interact with it as if it were a normal database. The Data Availability abstraction in Silvana ensures that all data needed to verify and rebuild the state of the rollup is accessible outside the proving system, without burdening the developer with managing data storage. 

Each operation in DA appears non-provable, but Silvana makes them provable - every time a user or developer calls the DA layer to read, write, update, or delete a record, Silvana generates a proof for that operation. In other words, the database transactions themselves are cryptographically attested. 

This is a powerful abstraction: the developer interacts with the data store using high-level commands, and behind the scenes Silvana ensures those commands are executed consistently and accompanied by ZK proofs of correctness. 

The client does not have to manually create Merkle proofs or worry about data withholding attacks; Silvana’s DA service and protocols handle availability proofs.