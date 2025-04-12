---
sidebar_position: 1
---

# Architecture Overview

## Overview

Silvana’s architecture reflects the complexity and comprehensiveness of the goals that Silvana is targeted at and must meet the high business requirements in scalability and security. All in all, it can be described as follows:

* **multi-tier** - there are multiple layers in Silvana's architecture, each having its own function.

* **modular** - by sticking to the modular design on the Application Layer, Silvana allows for arranging and deploying the code around particular practical, real-life use cases.

* **flexible** - the components of all architectural tiers can be deployed and used in multiple execution environments, which brings about flexibility in using Silvana.

* **business-oriented** - the architectural solution is designed in a way to empower developers to easily build apps based on business needs with all the technology complexities abstracted away and brought to lower levels.

* **chain-agnostic** - we do not focus on any particular blockchain, project, or cryptography; we can integrate with any L1, L2, DA, or Prover that supports ZKPs of any cryptographic function.

## Layers

Silvana platform comprises 4 layers. Here they are listed from the highest (business) level to the lowest (technical) level: 

* **Integration Layer** - deployment integration with end users;

* **Application Layer** - basic Silvana and extended enterprise functions;

* **Silvana Core** - proof generation and verification;

* **Coordination**, **Data Availability**, and **Settlement Layer** - fast transaction execution and proof aggregation, storing proofs and updating provable record states.

The diagram below illustrates Silvana’s architectural layers.

![Silvana Architecture](./img/silvana-architecture.png)

### Integration Layer

This is the highest-level layer, where consumers integrate what Silvana offers into their application architecture.

Silvana can be used by individual **enterprises** from different industries, **tech startups**, **industry integrators**, and other **consumers**. Enterprises can integrate directly by using modules or Silvana Core in different execution environments, either by forking module repos in their private execution environment by using Silvana Cloud or developing their own modules to meet their business needs. On the other hand, companies can join Silvana via industry integrators - bigger aggregators with extensive experience and expertise in an industry (DeFis, accounting, audit, insurance, real estate, etc.). They can also use Silvana modules and Core or develop new modules themselves.

### Application Layer

This is the layer where the business logic is represented for end users — consumers, **enterprises** (**startups**), and **industry integrators**. It is represented by multiple modules tailored to a specific business use case (document verification, NFTs, exchange, car rental, etc.). 

Each module is essentially deployed as code that end users can access in a mono repo. We offer some of the most common modules to cover a wide range of use cases. Additionally, our customers and system integrators can add their modules to extend the application layer's functionality. Some basic modules are provided by Silvana and are open for public use. Such modules will initially include the following:

* Transactions Module

* NFT Module

* Fungible Tokens Module

* DEX Module

* Token Launchpad Module

* and more...

With time, more such modules will be added. Enterprises, integrators, and developers can additionally develop more modules to meet their business requirements, too. This will enrich our Application layers and cover more and more use cases. 

### Silvana Core

Silvana Core is the layer where Silvana's internal magic unfolds: proof generation and verification, Prover Program (proof logic), transaction building, and API interaction. Silvana Core includes the following:

* **Prover**: generates ZK proofs based on provable record state changes

* **Verifier**: independently verifies generated ZK proofs

* **Database**: stores ZK proofs and provable records

* **Router**: provides schemas and Prover Program for proofs

* **ABI (Application Binary Interface)**: builds, compiles, sends, and monitors transactions

* **ABI API**: facilitates transaction data retrieval

* **Indexer**: aligns and indexes transaction data

* **Tx Monitor**: monitors transaction statuses

* **Tx Sender**: sends transactions to blockchain networks

> **Terms**
> 
> * **Prover Program** - the business logic that rules how a proof has to be generated and verified.
> 
> * **Proof Job** - a proof generated to be shown in a transaction as a piece of cipher instead of the private Input.

Generating proofs requires computational power, which in turn creates infrastructural demands. Silvana deploys a **network of prover nodes** that produce **proof jobs** in exchange for rewards. This ensures decentralization and system robustness.

Apart from provers, Silvana Network can extend to the following types of nodes:

* **Data Availability & Mutable State Nodes** to manage decentralized data storage and dynamic updates governed by cryptographic proofs.

* **Distributed SQL Database Nodes** to provide standard SQL interfaces on top of the decentralized data and enforce cryptographic checks for data accuracy.

* **Staking Nodes** to let token holders stake their Silvana tokens, securing the network and earning rewards.

* **Restaking Nodes** to offer staking services for the Silvana Truth Marketplace, letting agents access shared staking pools for proof generation.

Each Silvana Network node may perform one or more roles in the ecosystem, either as private corporate infrastructure or as part of the public Silvana network.

### Coordination Layer

Transactions involving **zero-knowledge proofs (ZKPs)** are generally computationally heavy and, therefore, take longer time. That’s the reason why most ZK L1 or L2 projects lack scalability. Silvana built its **Coordination Layer** to ensure fast and secure transactions with ZKPs. The Coordination Layer is based on a network that can guarantee fast transaction execution. It aggregates proofs and has a Sequencer to queue proofs and transactions and batch them in a block. Once a block is built, it is sent to the Settlement Layer, which is a ZK network. Silvana’s Coordination Layer helps to take the best of the two worlds: the high scalability of the blockchain where transactions are executed, and the data security of the blockchain leveraging zero-knowledge proofs.

> **Terms**
>   
> A **ZKP** is a cryptographic protocol that allows one party (a prover) to demonstrate to another party (a verifier) that a specific statement is true without revealing any underlying information. The Verifier is convinced of the claim's truthfulness but gains no additional knowledge beyond its validity.

### Data Availability Layer

The **Data Availability (DA) Layer** is a **storage** that keeps recorded data in **data blobs** and provides proof of the availability and state mutation of stored objects - **provable records**. At any time, a user can read the stored objects to see their current state. The object's state can be mutated as a result of running a transaction, and an object can be deleted from the DA. As each of these transactions runs, the proof is generated and events are emitted. Silvana is open to integrating with existing or emerging DA layers.

> **Terms**
>   
> * **Data blob** - a large, unstructured data packet that can be attached to transactions or blocks to enhance scalability and efficiency by enabling the processing of substantial data volumes without congesting the main chain.
> 
> * **Provable record** - a digitally verifiable representation of a crypto and real-world asset.

### Settlement Layer

The **Settlement Layer** is the lowest-level part of Silvana’s architecture. In other words, this is the blockchain layer, where transactions are signed by a set of validators to ensure transaction consistency and validity. As transactions are validated, they are added to an L1 or L2 blockchain. Keeping transactions on-chain ensures data security and consistency.

## Execution Environments

Silvana offers flexible execution arrangements by providing 3 options for how different Silvana components can be deployed in each particular case by a user. All in all, this can be done in 3 execution environments:

* **Cloud Execution Environment** - execution of Silvana functions in Silvana Cloud;

* **Trusted Execution Environment** - execution of Silvana functions in the Trusted Enclave of the Silvana Cloud;

* **Private Execution Environment** - execution of Silvana functions in private infrastructure (cloud, servers).