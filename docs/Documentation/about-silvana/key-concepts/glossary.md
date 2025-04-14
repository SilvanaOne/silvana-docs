---
sidebar_position: 4
---

# Glossary

## A

**ABI (Application Binary Interface)** - defines how modules, smart contracts, and external applications interact with Silvana's system, enabling transaction building and proof verification.

**ABI API** - provides programmatic access to Silvana's ABI, allowing developers to create, compile, and monitor transactions with provable records.

**Account-Based Model** - a blockchain data structure where transactions update the balances of accounts directly, similar to how traditional banking systems operate.

**Agent (Application Layer)** - performs functions contained in module repositories, allowing automation of Silvana functions, including scheduled, pre-paid, and event-triggered transactions.

**AI Agents** - can operate in secure enclaves or as standard AI modules, generating insights or additional encrypted data interpretations.

**API (Application Programming Interface)** - a set of protocols and tools that allow different software applications to communicate and interact with each other, often used to integrate blockchain functionalities with external systems.

**Application Layer** - basic Silvana and extended enterprise functions.

## B

**Blockchain Execution (Settlement) Layer** - building, compiling, sequencing, and sending transactions on L1 or L2 chains.

## C

**Cloud Execution Environment (CXE)** - deploys and runs Silvana modules, provers, and agents in Silvana's public cloud infrastructure, providing a scalable, managed environment for executing zero-knowledge proofs and interacting with the network.

**Consensus Mechanism** - the protocol used by a blockchain network to validate transactions and reach agreement among participants. Examples: Proof of Work (PoW), Proof of Stake (PoS), and Byzantine Fault Tolerance (BFT).

**Coordination Layer** - manages transaction sequencing, execution, and rollup state commitments within Silvana. It processes valid transactions, emits transaction events, and publishes proof data to the Data Availability (DA) layer.

**Counterparty** - participant in a transaction within Silvana, such as a business, regulator, or user, that verifies zero-knowledge proofs or signs transactions without accessing private inputs.

**Cryptographic Verification** - the process of using cryptographic techniques to confirm the authenticity, integrity, and validity of data, transactions, or proofs without exposing sensitive information.

## D

**Data Availability & Mutable State Nodes** - manage decentralized data storage and dynamic updates governed by cryptographic proofs.

**Data Availability Layer** - storage for transaction data in blobs with provable records.

**Data Layer Agents** - responsible for securely storing and managing data in a decentralized fashion.

**Decentralized Storage** - a method of storing data across multiple distributed nodes instead of relying on a single centralized server, enhancing security, redundancy, and censorship resistance.

**Distributed SQL Database Nodes** - provide standard SQL interfaces on top of the decentralized data and enforce cryptographic checks for data accuracy.

## E

**Event-Based Architecture** - a software design pattern where system components communicate and respond to events, allowing for asynchronous processing and improved scalability.

## H

**Hash Function** - a cryptographic algorithm that transforms input data into a fixed-length output, ensuring data integrity and enabling secure identification of information without revealing the original input.

**Human Agents** - includes professionals or individuals who can provide manual checks, audits, or expert opinions.

## I

**Immutable Ledger** - a blockchain or distributed system where recorded data cannot be altered or deleted after being written, ensuring transparency and security.

**Indexer** - the component responsible for scanning and structuring blockchain data, allowing efficient querying and retrieval of information related to provable records, transactions, and events within Silvana.

**Indexing** - the process of organizing and structuring blockchain data to allow efficient searching, querying, and retrieval of relevant information.

**Integration Layer** - deployment integration with end users.

**Instant Deals Module** - the base module which enables real-time negotiations with sub-second delays and is used for a real-time proof marketplace and DEX.

## L

**Layer 1 (L1)** - the base layer of a blockchain where transactions are directly executed and recorded. It provides security, consensus, and settlement for all transactions and smart contracts.

**Layer 2 (L2)** - a scaling solution built on top of Layer 1 to increase transaction throughput and reduce costs. L2 solutions process transactions off-chain and submit proofs to L1 for validation.

## M

**Merkle Tree** - a cryptographic data structure that organizes data into a hierarchical tree format, allowing efficient and secure verification of large datasets by checking only a small portion of the data.

**Merge Execution** - the final execution mode that merges two proofs, producing a recursive proof that is saved to the DA layer for future use.

**Modular Architecture** - a system design that separates components (such as execution, consensus, and data availability) into independent modules, allowing for greater flexibility and scalability.

**Monolithic Architecture** - a system design where all components, including execution, consensus, and data availability, are tightly integrated within a single framework, often leading to scalability challenges.

**Mutable State** - a property of a system where stored data can be modified or updated over time, allowing for dynamic record-keeping and interaction.

## N

**Networking Layer** - facilitates communication between different components of Silvana, including provers, verifiers, agents, and external integrations, ensuring efficient data transfer and system interoperability.

## O

**Object-Centric Model** - a data model where assets and records are represented as self-contained objects with mutable states rather than accounts.

**Off-Chain** - refers to data processing, computations, or transactions that occur outside the blockchain to improve scalability and efficiency, with final results or proofs submitted to the blockchain.

**On-Chain** - refers to data, transactions, or smart contract executions that occur directly on a blockchain, ensuring immutability and security but often incurring higher costs.

**Operators Execution** - a swift mode where multiple operators confirm the execution result by running the contract in no-proofs mode, which takes only a few milliseconds.

## P

**Private Execution Environment (PXE)** - execution of Silvana functions in private infrastructure (cloud, servers).

**Private Input** - the information to be concealed from the public eye.

**Professional Agents** - domain experts (finance, insurance, accounting, compliance) who add authoritative validation to marketplace proofs.

**Proof Generation** - the process of creating a cryptographic proof that validates the correctness of a computation or statement without revealing its underlying data.

**Proof Generation Nodes** - generate zero-knowledge proofs, ensuring secure data operations without revealing private inputs.

**Proof Job** - a proof generated to be shown in a transaction as a piece of cipher instead of the private Input.

**Proof System** - a framework or protocol that defines how zero-knowledge proofs are generated, verified, and applied within a cryptographic or blockchain environment.

**Proof Verification** - the process by which a verifier checks the validity of a cryptographic proof to ensure that a computation or statement is correct without accessing confidential details.

**Prover** - the component responsible for generating zk proofs for mutated states of provable records. More info: [Prover](https://docs.silvana.one/Documentation/architecture/silvana-core/prover)

**Proving Agents** - process cryptographic verification, delivering proofs with high certainty and minimal human intervention.

**Provable Execution** - a mode in which a prover within the Silvana network executes the contract and generates a proof of execution, which is then saved to the Data Availability (DA) layer.

**Provable Records** - are digitally verifiable representations of crypto and real-world assets. More info: [Provable Records](https://docs.silvana.one/Documentation/about-silvana/key-concepts/provable-records)

**Provable Record Schemas** - are predefined structures that define the format, rules, and permissible states of provable records within Silvana, ensuring consistency and validity in zero-knowledge proof-based transactions.

**Public Input** - the information the user keeps publicly available.

## R

**Recursive Proofs** - merges two proofs, producing a recursive proof that is saved to the DA layer for future use.

**Restaking Nodes** - offer staking services for the Silvana Truth Marketplace, letting agents access shared staking pools for a proof generation.

**Router** - the interface for users to interact with provable records.

**Rollup** - a Layer 2 scaling technique that batches multiple transactions together and generates a single proof, which is submitted to Layer 1 for validation, reducing on-chain computation and costs.

## S

**SDK (Software Development Kit)** - a collection of tools, libraries, and documentation that enables developers to build and integrate applications with a specific platform, such as a blockchain network.

**Sequencer** - an entity responsible for ordering transactions in Layer 2 rollups before submitting them to Layer 1 for final settlement.

**Signature Scheme** - a cryptographic method used to verify the authenticity and integrity of messages, transactions, or proofs through digital signatures.

**Silvana Agents** - includes various types of agents that perform different functions within the Silvana ecosystem.

**Silvana Database** - stores provable records and their mutable states, ensuring cryptographic integrity while allowing authorized interactions and updates through zk-program logic.

**Silvana DEX Module** - a decentralized exchange built using the Silvana Instant Deals module and the Silvana Instant Deals Provable Settlement module, enabling ultrafast, provable trading of any asset, including tokens, NFTs, and RWAs.

**Silvana Gaming** - provable decentralized games building block.

**Silvana Instant Deals Provable Settlement** – a module used to calculate recursive proofs for Silvana Instant Deals and, if necessary, settle the deal results on Layer 1 (L1).

**Silvana Network** - consists of various nodes that perform different functions within the ecosystem.

**Silvana Real Estate** - provable records holding data about Real Estate costs and revenues.

**Silvana zkRollup** - includes various modules and execution modes for the Silvana platform.

**Smart Contract** - a self-executing program stored on a blockchain that automatically enforces and executes predefined rules when specific conditions are met.

**Staking Layer** - enables token staking within Silvana, allowing participants to secure the network, support proof generation, and earn rewards for contributing to network security and stability.

**Staking Nodes** - let token holders stake their Silvana tokens, securing the network and earning rewards.

**State Commitment** - a cryptographic representation of the current state of a blockchain or rollup, allowing for efficient verification of past transactions and ensuring data integrity.

**Submission Execution** - a mode that validates input data before submission, ensuring accuracy and preventing errors from the start.

## T

**Transaction** - an operation that changes the state of an asset, record, or contract on a blockchain or within a decentralized system.

**Trusted Execution Environment (TEE)** - execution of Silvana functions in the Trusted Enclave of the Silvana Cloud.

**Tx Monitor** - a tool for tracking transaction status, execution, and settlement updates within Silvana, ensuring real-time visibility into proof generation and verification processes.

## V

**Validator** - a network participant responsible for verifying transactions and adding new blocks to the blockchain, ensuring network security and consensus.

**Verifier** - the component that checks the generated proofs on the verifier's (counterparty's) side. More info: [Silvana Core](https://docs.silvana.one/Documentation/architecture/silvana-core/)

## Z

**ZKML Agents** - enables machine learning models to run in zero-knowledge and provable mode, offering sophisticated data insights without exposing raw data and with proof of the model training set used.

**zkProgram** - the business logic that rules how a proof has to be generated and verified.

**zk-Rollup** - a Layer 2 scaling solution that batches multiple transactions off-chain and generates a zero-knowledge proof to validate them. This proof is then submitted to the main blockchain (Layer 1), significantly reducing on-chain computation and storage while maintaining security and decentralization.

**zk-SNARK** - (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) is a type of zero-knowledge proof that allows a prover to demonstrate the validity of a statement to a verifier without revealing any additional information. It is succinct, meaning the proof size is small and quick to verify, and non-interactive, requiring only a single proof submission.

**zk-STARK** - (Zero-Knowledge Scalable Transparent Argument of Knowledge) is a type of zero-knowledge proof that provides scalable and transparent verification without requiring a trusted setup. zk-STARKs use hash functions instead of elliptic curves, making them more resistant to quantum attacks and suitable for large-scale computations.

**Zero-Knowledge Proof (ZKP)** - a cryptographic method that allows one party (the prover) to prove to another party (the verifier) that a statement is true without revealing any additional information beyond the validity of the statement. More info: [Zero-Knowledge Proofs](https://docs.silvana.one/Documentation/about-silvana/key-concepts/zk-proofs)