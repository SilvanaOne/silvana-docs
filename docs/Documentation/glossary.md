---
sidebar_position: 8
---

# Glossary

## A

### ABI API
ABI API provides programmatic access to Silvana's ABI, allowing developers to create, compile, and monitor transactions with provable records.

### Agent
Agent is a mechanism of automated launch of decentralized applications. In a way, an agent is a wrapper that joins the necessary Silvana components to perform the application functions. See full breakdown of agent types and functionality in [Agents](/Documentation/deployment/agents).

### Application Binary Interface (ABI)
Application Binary Interface (ABI) defines how modules, smart contracts, and external applications interact with Silvana's system, enabling transaction building and proof verification.

### API (Application Programming Interface)
API (Application Programming Interface) is a set of protocols and tools that allow different software applications to communicate and interact with each other, often used to integrate blockchain functionalities with external systems.

## C

### Counterparty
Counterparty is a participant in a transaction within Silvana, such as a business, regulator, or user, that verifies zero-knowledge proofs or signs transactions without accessing private inputs.

### Cryptographic Verification
Cryptographic Verification is the process of using cryptographic techniques to confirm the authenticity, integrity, and validity of data, transactions, or proofs without exposing sensitive information.

## D

### Data Availability (DA) layers
Data Availability (DA) layers are blockchain components or infrastructure layers dedicated to storing and serving data necessary to validate blockchain transactions, especially in modular and rollup-based blockchain architectures.

## E

### Event-Based Architecture
Event-Based Architecture is a software design pattern where system components communicate and respond to events, allowing for asynchronous processing and improved scalability.

### Execution Environment
Execution Environment is a deployment setting where Silvana components run, depending on infrastructure and privacy requirements. Learn more about environment types in the [Deployment Environments](/Documentation/deployment/deployment-environments).

### Execution Mode
Execution Mode is a processing method that defines how a transaction is handled within the Silvana network. Learn more about execution mode types in the [Execution Modes](/Documentation/ultra-fast-rollup/silvana-rollup#execution-modes).

## I

### Indexer
Indexer is the component responsible for scanning and structuring blockchain data, allowing efficient querying and retrieval of information related to provable records, transactions, and events within Silvana.

## L

### Layer 1 (L1)
Layer 1 (L1) is the base layer of a blockchain where transactions are directly executed and recorded. It provides security, consensus, and settlement for all transactions and smart contracts. 

### Layer 2 (L2)
Layer 2 (L2) is a scaling solution built on top of Layer 1 to increase transaction throughput and reduce costs. L2 solutions process transactions off-chain and submit proofs to L1 for validation. 

### Layers
Layers are distinct functional levels that organize the Silvana platform's architecture. Explore all layers in detail in the [Layers](/category/layers).

## M

### Modular Architecture
Modular Architecture is a system design that separates components (such as execution, consensus, and data availability) into independent modules, allowing for greater flexibility and scalability.

### Mutable State
Mutable State is a property of a system where stored data can be modified or updated over time, allowing for dynamic record-keeping and interaction.

## N

### Nodes
Nodes are core infrastructure units that run and support Silvana's decentralized network operations. See full list and roles of nodes in the [Network Nodes](/Documentation/architecture/architecture-overview#network-nodes).

## O

### Object-Centric Model
Object-Centric Model is a data model where assets and records are represented as self-contained objects with mutable states rather than accounts. More info: [Object-Centric Design](/Documentation/key-concepts/object-centric-design-vs-account-centric-design).

### Off-Chain
Off-Chain refers to data processing, computations, or transactions that occur outside the blockchain to improve scalability and efficiency, with final results or proofs submitted to the blockchain.

### On-Chain
On-Chain refers to data, transactions, or smart contract executions that occur directly on a blockchain, ensuring immutability and security but often incurring higher costs.

## P

### Pickles
Pickles is an advanced recursive zero-knowledge proof system used by Silvana to enable efficient and scalable verification of proofs by allowing proofs to verify other proofs.

### Proof Generation
Proof Generation is the process of creating a cryptographic proof that validates the correctness of a computation or statement without revealing its underlying data.

### Proof Job
Proof Job is a proof generated to be shown in a transaction as a piece of cipher instead of the private Input.

### Proof System
Proof System is a framework or protocol that defines how zero-knowledge proofs are generated, verified, and applied within a cryptographic or blockchain environment.

### Proof Verification
Proof Verification is the process by which a verifier checks the validity of a cryptographic proof to ensure that a computation or statement is correct without accessing confidential details.

### Prover
Prover is the component responsible for generating zk proofs for mutated states of provable records. More info: [Prover](/Documentation/architecture/silvana-core/prover).

### Prover Function (Circuit)
Prover Function (Circuit) is the function that allows the prover to generate a zero-knowledge proof by demonstrating that a private input satisfies a public rule without revealing the underlying data. More info: [Prover Function](/Documentation/architecture/silvana-core/prover#prover-function).

### Prover Program
Prover Program is the business logic and cryptographic rule set that governs how a ZKP should be generated and verified. It defines what data must be proven, how it must be validated, and under what conditions the proof is considered valid.

### Provable Records
Provable Records are digitally verifiable representations of crypto and real-world assets. More info: [Provabe Records](/Documentation/key-concepts/provable-records). 

### Provable Record Schemas
Provable Record Schemas are predefined structures that define the format, rules, and permissible states of provable records within Silvana, ensuring consistency and validity in zero-knowledge proof-based transactions.

## R

### Recursive Proofs
Recursive Proofs merge two proofs, producing a recursive proof that is saved to the DA layer for future use.

### Rollup
Rollup is a Layer 2 scaling technique that batches multiple transactions together and generates a single proof, which is submitted to Layer 1 for validation, reducing on-chain computation and costs.

### Router
Router is the interface for users to interact with provable records. More info: [Router](/Documentation/architecture/silvana-core/router).

## S

### Schema
Schema is a predefined structure that defines the fields and data types of a provable record, used by the Router and Prover Program to ensure consistency and validity during proof generation.

### Sequencer
Sequencer is an entity responsible for ordering transactions in Layer 2 rollups before submitting them to Layer 1 for final settlement.

### Signature Scheme
Signature Scheme is a cryptographic method used to verify the authenticity and integrity of messages, transactions, or proofs through digital signatures.

### Silvana Database
Silvana Database stores provable records and their mutable states, ensuring cryptographic integrity while allowing authorized interactions and updates through zk-program logic.

### Smart Contract
Smart Contract is a self-executing program stored on a blockchain that automatically enforces and executes predefined rules when specific conditions are met.

### State Commitment
State Commitment is a cryptographic representation of the current state of a blockchain or rollup, allowing for efficient verification of past transactions and ensuring data integrity.

### State Mutation
State Mutation is the process of changing the state of a provable record; each mutation is accompanied by a proof to ensure the change follows predefined rules.

## V

### Verifier
Verifier is the component that checks the generated proofs on the verifier's (counterparty's) side.

### Verifier Function (Circuit)
Verifier Function (Circuit) is the function that allows the verifier to validate a zero-knowledge proof without accessing the private input, ensuring the correctness of the prover's claim.

## Z

### Zero-Knowledge Proof (ZKP)
Zero-Knowledge Proof (ZKP) is a cryptographic method that allows one party (the prover) to prove to another party (the verifier) that a statement is true without revealing any additional information beyond the validity of the statement. More info: [Zero-Knowledge Proof (ZKP)](/Documentation/key-concepts/zk-proofs)

### zkProgram
zkProgram is the business logic that rules how a proof has to be generated and verified.

### zk-Rollup
zk-Rollup is a Layer 2 scaling solution that batches multiple transactions off-chain and generates a zero-knowledge proof to validate them. This proof is then submitted to the main blockchain (Layer 1), significantly reducing on-chain computation and storage while maintaining security and decentralization.

### zk-SNARK
zk-SNARK (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) is a type of zero-knowledge proof that allows a prover to demonstrate the validity of a statement to a verifier without revealing any additional information. It is succinct, meaning the proof size is small and quick to verify, and non-interactive, requiring only a single proof submission.

### zk-STARK
zk-STARK (Zero-Knowledge Scalable Transparent Argument of Knowledge) is a type of zero-knowledge proof that provides scalable and transparent verification without requiring a trusted setup. zk-STARKs use hash functions instead of elliptic curves, making them more resistant to quantum attacks and suitable for large-scale computations.