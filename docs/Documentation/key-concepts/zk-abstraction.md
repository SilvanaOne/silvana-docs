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

Silvana addresses this by abstracting ZK complexity across its stack. **Silvana’s zk Abstraction** is a foundational part of its architecture, designed to isolate developers from the low-level challenges of implementing zero-knowledge systems. It allows clients to build secure, private, and trustless applications **without needing to understand** or **implement zero-knowledge proofs directly**. That’s exactly what Silvana abstraction includes:
* Proof system abstraction;
* Execution abstraction;
* Settlement abstraction;
* Coordination abstraction;
* Data availability abstraction.

### Functional Framing
The following table outlines the specific role of each abstraction layer in Silvana:

| Abstraction                      | What You Do                                                      | What Silvana Does                                                 | Internals Abstracted                                        |
|----------------------------------|------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------|
| **Proof System Abstraction**     | - Define Prover Programs with logical constraints<br/>- Register schemas via the Router<br/>- Trigger proof generation via API | - Converts logical assertions into ZK circuits<br/>- Generates witnesses & composes recursive proofs<br/>- Manages proof keys/formats | - Circuit creation (R1CS, PLONK, Halo2)<br/>- Key compilation & management<br/>- Recursive proof tree construction |
| **ABI Abstraction**              | - Call high-level functions like `buildTransaction()`<br/>- Submit JSON or typed inputs<br/>- Monitor lifecycle via SDK/API | - Serializes & preprocesses inputs<br/>- Builds witness data<br/>- Routes transactions to prover & sequencer | - ABI encoding & signature handling<br/>- Witness serialization<br/>- Proving infra integration |
| **Settlement Abstraction**       | - Query transaction status<br/>- Receive L1/L2 proof confirmation<br/>- No custom verifier contracts needed | - Submits proof to on‑chain verifier contracts<br/>- Formats chain‑specific calldata & calls<br/>- Updates on‑chain state commitments | - Contract binding & calldata formatting<br/>- Gas estimation & retry logic<br/>- Multi‑chain verifier support |
| **Coordination Abstraction**     | - Submit tx via API or agent<br/>- Preview execution results<br/>- Listen for proof‑finalization events | - Sequences transactions via operator sets<br/>- Provides fast no‑proof previews<br/>- Handles recursive merges | - Concurrency & state reconciliation<br/>- Batch scheduling & finality<br/>- Rollup state tracking |
| **Data Availability Abstraction**| - Use `write()`, `read()`, `mutate()`, `delete()` on records<br/>- Work with state objects like a doc DB<br/>- Integrate via agent pipelines | - Generates a proof per CRUD action<br/>- Links blobs to DA hash & publishes commitments<br/>- Ensures on‑chain availability & verifiability | - Merkle tree generation & validation<br/>- DA provider selection<br/>- Cross‑layer proof syncing |

## Proof System Abstraction

Instead of hand-crafting arithmetic circuits or dealing with elliptic curve math, a developer writes high-level **Prover Program** (zero-knowledge programs representing the proof logic) in a familiar format. Then compiles and proves these programs under the hood. This means the developer can focus on business logic and constraints, while Silvana handles witness generation, proof creation, and verification keys internally.

There’s no need to understand elliptic curve math or recursion composition. Even **recursive proof merges** (for batching or compression) are handled internally.

- **Program compilation**  
  Translates high-level logic into ZK circuits and optimizes constraint structure automatically.

- **Key management**  
  Generates and caches proving keys; abstracts all key handling from the developer.

- **Witness preparation**  
  Converts inputs into field-compatible witness data and validates constraints.

- **Proof generation**  
  Runs the circuit on Silvana’s prover infrastructure with support for parallel and accelerated proving.

- **Recursive proofs**  
  Automatically compresses multiple proofs into one for efficient settlement or batching.

- **Proof metadata handling**  
  Stores proof results and handles formatting for downstream verification or integration.


This abstraction  allows developers to focus purely on defining logic, without needing to understand the cryptographic foundations of zero-knowledge systems. Whether using **default provers of Silvana Core**, **provers of another proof systems**, **distributed networks**, or **custom-made provers**, Silvana guarantees consistent proof behavior across all configurations.

## Application Binary Interface (ABI)

Silvana’s Application Binary Interface (ABI) further abstracts the way developers interact with ZK programs and provable records. In Silvana, the ABI component of Silvana Core is responsible for “building, compiling, sending, and monitoring transactions.” 

This means developers can construct transactions using familiar structures (JSON payloads, function calls, etc.), and the ABI will handle encoding this data, attaching any required proof metadata, and dispatching it to the Silvana network. 

- **Transaction construction**  
  Accepts common input formats (JSON, key-value maps) and maps them to Prover Program arguments and record schemas.

- **Encoding and preprocessing**  
  Converts inputs into a format suitable for proof generation, handling ABI encoding and record references.

- **Proof metadata attachment**  
  Adds required proof metadata **automatically** (e.g., circuit identifiers, input hashes) before dispatch.

- **Dispatch and execution**  
  Sends the transaction into the execution pipeline and routes it to the appropriate prover or sequencer.

- **Monitoring and lifecycle management**  
  Tracks transaction progress (pending, executing, proven, finalized) and exposes status via API.


## Settlement Abstraction

Silvana’s settlement abstraction ensures that all state changes and proofs eventually get anchored on a secure blockchain without requiring the developer to handle those details. In a rollup architecture, a **Settlement Layer** typically refers to the base chain contract that validates proofs and stores the canonical state root. 

In fact, Silvana is described as **chain-agnostic** - it can work with various L1s or L2s to settle transactions. This means the same application code can run while Silvana handles connecting to the appropriate blockchain in the background.

- **Proof Packaging and Routing**  
  - Automatically wraps generated zkProofs into a format compatible with the target blockchain.  
  - Abstracts the differences between proof systems and verifier contract expectations.

- **Smart Contract Invocation**  
  - Handles the submission of proofs to verifier contracts across supported L1/L2 chains.  
  - Developers don’t need to manage calldata, gas estimation, or relay logic - Silvana orchestrates the full invocation process.

- **On-Chain Verification**  
  - Verification logic is handled entirely by Silvana's integrated contracts.  
  - Developers never deal with verifier implementation, state root updates, or error handling logic.

- **Finality Management**  
  - Monitors blockchain finality and abstracts the concept of confirmation depth.  
  - Emits high-level lifecycle events so applications can respond without parsing on-chain state directly.

- **Chain Abstraction**  
  - Provides a single, unified interface for settlement across multiple chains.  
  - All chain-specific behaviors, formats, and logic are hidden behind consistent developer-facing APIs.


## Coordination Abstraction

Coordinating the flow of transactions and proofs in a ZK system can be complex. Silvana addresses this with a **Coordination Layer** that acts as the sequencer and orchestrator for the rollup.

The coordination abstraction means developers do not write their own logic for ordering transactions, managing mempools, or triggering proofs - Silvana’s coordination layer handles all that and presents a simplified model to the developer.

Internally, Silvana’s rollup execution goes through **multiple phases (modes)** to balance speed and security​:
* **Submission Execution**
* **Operators Execution (no-proof mode)**
* **Provable Execution**
* **Merge Execution**

All these steps are automated by Silvana. The developer sees a smooth experience: when they submit a transaction, Silvana will **sequence** it, **execute** it, and later **finalize** it with a proof. The coordination abstraction means the developer doesn’t have to worry about double-spending, race conditions, or waiting for proofs.

## Data Availability (DA) Abstraction

Silvana provides a **Data Availability** Layer that stores transaction data and state in a decentralized way, and it abstracts this such that developers interact with it as if it were a normal database. 

The **Data Availability Abstraction** in Silvana ensures that all data needed to verify and rebuild the state of the rollup is accessible outside the proving system, without burdening the developer with managing data storage. 

This is a powerful abstraction: the developer interacts with the data store using high-level commands, and behind the scenes Silvana ensures those commands are executed consistently and accompanied by ZK proofs of correctness.

- **Provable CRUD operations**  
  - Silvana turns `read`, `write`, `mutate`, and `delete` commands into verifiable state transitions.  
  - Developers don't manage constraints - ZK proofs are automatically generated for every data operation.

- **Data encoding and hashing**  
  - All records and blobs are internally serialized and Merkle-hashed.  
  - The entire data-to-proof transformation is abstracted away from the developer.

- **Backend integration abstraction**  
  - Silvana plugs into modular storage backends (e.g. internal nodes) with no user-side setup.  
  - Developers never select providers or handle replication - Silvana manages storage logic transparently.

- **Availability proof management**  
  - Automatically tracks and proves data retrievability.  
  - Silvana enforces verifiability of availability, shielding developers from handling data audits or challenges.

- **Stateless access for clients**  
  - Applications query state without managing indexing, history tracking, or proof resolution.  
  - Every response is guaranteed to match a provable snapshot - without requiring the developer to manage state verification logic.

The clients interact with data like they would in a normal database, while Silvana ensures every change is provable, consistent, and available across layers.