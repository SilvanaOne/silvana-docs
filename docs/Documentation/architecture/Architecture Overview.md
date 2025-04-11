---
sidebar_position: 1
---

# Architecture Overview

## Layers

Due to the complexity and comprehensiveness of the goals that Silvana is targeted at, it has a well-thought architecture that can be described as follows:

* **multi-tier** - there are multiple layers in Silvana’s architecture, each having its own function.

* **modular** - by sticking to the modular design on the Application Layer, Silvana allows for arranging and deploying the code around particular practical, real-life use cases;

* **flexible** - the components of all architectural tiers can be deployed and used in multiple execution environments, which brings about flexibility in using Silvana;

* **business-oriented** - the architectural solution is designed in a way to empower developers to easily build apps based on business needs with all the technology complexities abstracted away and brought to lower levels.

* **chain-agnostic** - we don’t focus on any particular blockchain, project, or cryptography; we can integrate with any L1, L2, DA, or Prover that supports ZKPs of any cryptographic function.

Silvana platform comprises 8 layers and 3 sublayers: 

* **Integration Layer** - deployment integration with end users;

* **Application Layer** - basic Silvana and extended enterprise functions;

* **Cloud Execution Sublayer** - execution of Silvana functions in Silvana Cloud;

* **Trusted Execution Layer** - execution of Silvana functions in the Trusted Enclave of the Silvana Cloud;

* **Private Execution Layer** - execution of Silvana functions in private infrastructure (cloud, servers);

* **Silvana Core** - proof generation and verification;

* **Silvana Network** - decentralized prover node network;

* **Execution Layer** - building, compiling, sequencing, and sending transactions on L1 or L2 chains;

* **Coordination Layer** - decoupling transactions that need a proof from transactions where no proof is required;

* **Data Availability (DA) Layer** - storing and updating data;

* **Settlement Layer** - transaction and proof validation.

The diagram below illustrates Silvana’s architectural layers.

![Silvana Architecture](./img/silvana-architecture.png)

## Integration Layer

This is the highest-level layer, where consumers integrate what Silvana offers into their application architecture.

Silvana can be used by individual **enterprises** from different industries, **tech startups**, **industry integrators**, and other **consumers**. Enterprises can integrate directly by using modules or Silvana Core in different execution environments, either by forking module repos in their private execution environment by using Silvana Cloud or developing their own modules to meet their business needs. On the other hand, companies can join Silvana via industry integrators - bigger aggregators with extensive experience and expertise in an industry (DeFis, accounting, audit, insurance, real estate, etc.). They can also use Silvana modules and Core or develop new modules themselves.

## Application Layer

This is Silvana's execution layer, where the business logic is represented for end users — consumers, enterprises, startups, and integrators. It is represented by multiple modules tailored to a specific business use case (document verification, NFTs, exchange, car rental, etc.). 

Each module is essentially deployed as code that end users can access in a mono repo. We offer some of the most common modules to cover a wide range of use cases. Additionally, our customers and system integrators can add their modules to extend the application layer's functionality. Some basic modules are provided by Silvana and are open for public use. Such modules will initially include the following:

* Transactions Module;

* NFT Module;

* Fungible Tokens Module;

* DEX Module;

* Token Launchpad Module;

* and more…

With time, more such modules will be added. Enterprises, integrators, and developers can additionally develop more modules to meet their business requirements, too. This will enrich our Application layers and cover more and more use cases. 

## Silvana Core

Silvana Core is the layer where Silvana’s internal magic unfolds: proof generation and verification, Prover Program (proof logic), transaction building, and API interaction. Silvana Core includes the following:

* **Prover**: generates ZK proofs based on provable record state changes.

* **Verifier**: independently verifies generated ZK proofs.

* **Database**: stores ZK proofs and provable records.

* **Router**: provides schemas and Prover Program for proofs.

* **ABI (Application Binary Interface)**: builds, compiles, sends, and monitors transactions.

* **ABI API**: facilitates transaction data retrieval.

* **Indexer**: aligns and indexes transaction data.

* **Tx Monitor**: monitors transaction statuses.

* **Tx Sender**: sends transactions to blockchain networks.

## Silvana Network

Generating proofs requires computational power, which in turn creates infrastructural demands. Silvana Prover is responsible for generating proofs. However, this may not be enough. Silvana deploys a network of prover nodes that produce proof jobs for rewards. This will provide decentralization and system robustness.

Apart from provers, Silvana Network can extend to the following types of nodes:

* **Data Availability & Mutable State Nodes** to manage decentralized data storage and dynamic updates governed by cryptographic proofs.

* **Distributed SQL Database Nodes** to provide standard SQL interfaces on top of the decentralized data and enforce cryptographic checks for data accuracy.

* **Staking Nodes** to let token holders stake their Silvana tokens, securing the network and earning rewards.

* **Restaking Nodes** to offer staking services for the Silvana Truth Marketplace, letting agents access shared staking pools for proof generation.

Each Silvana Network node may perform one or more roles in the ecosystem, either as private corporate infrastructure or as part of the public Silvana network.

## Execution Layer

​This is the layer responsible for processing and executing transactions, as well as implementing smart contracts. This layer interprets and carries out the instructions embedded in transactions, ensuring that the blockchain's state is updated accordingly. It plays a crucial role in maintaining the deterministic nature of the blockchain, meaning that given a specific set of inputs, the system will consistently produce the same outputs. Silvana relies on highly scalable and programmable L1 and L2 solutions for the execution layer.

## Coordination Layer

Transactions involving private data use **zk proofs** to conceal it. However, if a transaction does not contain private data, this means no proof is required to be generated. So there’s a need to decouple those two types of transactions so that they follow two different flows: **with** and **without zk proofs**. Sui is an L1 blockchain that has a novel and intricately designed **Consensus mechanism**. To achieve Consensus, Sui utilizes the **Mysticeti** protocol, an evolution of earlier protocols like **Narwhal and Bullshark**, according to which only transactions involving **shared objects** need to go through consensus, while those where **owned objects** are handled, don’t have to do it. This essentially improves the transaction speed. Silvana leverages this property of Sui to achieve high scalability.

> **Note!**
>   
> * Zero-knowledge proof (ZKP) - a cryptographic protocol that allows one party (a prover) to demonstrate to another party (a verifier) that a specific statement is true without revealing any underlying information. The Verifier is convinced of the claim's truthfulness but gains no additional knowledge beyond its validity.
> 
> * Consensus - the process by which network participants agree on the validity of transactions and the current state of the ledger, ensuring consistency across a decentralized network.
> 
> * Narwhal - Sui’s high-throughput mempool protocol that ensures reliable dissemination and availability of transaction data by organizing it into a Directed Acyclic Graph (DAG) structure.
> 
> * Bullshark - Sui’s Byzantine Fault Tolerant (BFT) consensus protocol that orders transactions, achieving high throughput and low latency.
> 
> * Shared object - an object that has been made accessible to all users on the network, allowing anyone to read or modify them like a package (smart contract).
> 
> * Owned object - an asset exclusively controlled by a single address, allowing their transactions to bypass consensus for faster execution.

## Data Availability Layer

The **Data Availability (DA) Layer** is a **storage** that keeps recorded data in **data blobs** and provides proof of the availability and state mutation of stored objects - **provable records**. At any time, a user can read the stored objects to see their current state. The object's state can be mutated as a result of running a transaction, and at any time, an object can be deleted from the DA. Silvana is open to integrating with existing or emerging DA layers.

> **Note!**
>   
> * **Data blob** - a large, unstructured data packet that can be attached to transactions or blocks to enhance scalability and efficiency by enabling the processing of substantial data volumes without congesting the main chain.
> 
> * **Provable record** - a digitally verifiable representation of a crypto and real-world asset.

## Settlement Layer

The **Settlement Layer** is the lowest-level part of Silvana’s architecture. In other words, this is the blockchain layer, where transactions are signed by a set of validators to ensure transaction consistency and validity. As transactions are validated, they are added to an L1 or L2 blockchain. Keeping transactions on-chain ensures data security and consistency.