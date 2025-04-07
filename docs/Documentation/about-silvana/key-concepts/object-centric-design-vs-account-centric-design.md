---
sidebar_position: 3
---

# Account-Centric Design for Silvana

## Account-Centric Design

Essentially, a blockchain has a dual nature. On the one hand, at its core, a blockchain is a **replicated deterministic state machine**, meaning that each transaction results in a change of state. On the other hand, a blockchain is a database where data is stored in blocks, and all pieces of such data are recorded in a cryptographically sophisticated way that rules out unauthorized data mutation.

> ### **Note:**  
>  
> A **state machine** is a computer science concept whereby a machine can have multiple states but only one at any given time. There is a state, which describes the current state of the system and transactions that trigger state transitions.

Conventionally, in blockchains, an **account** serves as the fundamental unit of data storage and interaction. Every transaction - be it a transfer of funds or a delegation - results in the transition of a state of the affected account and, largely, the state of the whole blockchain - making an account the central entity within blockchain ecosystems. Typically, these characteristics describe the **account-centric design**: 

* Everything revolves around accounts — each user or smart contract has an account with a balance and optional code (for contracts).

* State is stored inside accounts.

* Interactions (like a contract calling another contract) are modeled as messages between accounts.

* Smart contracts live in account addresses, each having its own storage.

While this approach has been widely adopted, it presents inherent structural limitations, namely:

1. **Scalability**

As the number of accounts and transactions increases, the blockchain can become congested, leading to slower transaction processing times and creating scalability obstacles. That's what happened with Ethereum, giving rise to multiple L2 solutions designed to address this scalability issue.

2. **Programmability Restriction**

Account-centered approach to data storage and management significantly impedes the deployment and execution of more complicated business logic, where each entity requires a different set of number of fields. Thus, on Mina, the number of AccountStates is restricted to 8. This effectively limits the potential programmability to several use cases.

3. **Complicated Consensus and no Parallel Transactions**

All transactions have to be processed and executed consecutively since each state transition for the affected account and for the blockchain has to run through Consensus and be signed by the majority of the validator set. It makes transaction parallelization impossible without either using roll-ups or introducing special nodes - sequencers and transaction builders - to do this job, which sufficiently complicates the blockchain design.

## Object-Centric Design

The above-mentioned limitations highlight the need for continuous research and development to improve the efficiency and security of account-centric blockchains. **Object-centric design** is a true game-changer pioneered by Sui, Aptos, and Solana. With object-centric design, data in a blockchain is arranged by **programmable objects** like with the **Object-Oriented Programming (OOP)** - rather than by accounts. Such objects have fields that describe their states that get mutated (one or many) with each transaction due to a pre-defined logic described in an on- or off-chain smart contract.

This is how object-centric design makes a difference:

* State is composed of discrete objects, each having a unique ID and type.

* Objects can represent anything: tokens, NFTs, contracts, roles, data containers, etc.

* Transactions explicitly reference and manipulate objects, rather than global state.

Compared to the account-centric design, the object-centric design has the following benefits:

1. **Higher scalability**

Object-oriented blockchains are way faster as they allow for better organization, management, and storage of complex data structures and interactions.

2. **Higher programmability**

OOP-like objects can be part of more complex business logic deployed in smart contracts. Object-centric blockchains possess all characteristics of the OOP: encapsulation, inheritance, polymorphism, and abstraction.

3. **Higher flexibility**

Object-oriented design provides greater flexibility in defining and managing complex relationships between different entities, which can lead to more efficient and effective solutions.

4. **Transaction parallelization**

Since transactions can be broken up into the objects they're associated with, there's a possibility of several transactions running simultaneously. Moreover, it doesn't require any blockchain design tweaks or complications like introducing data blobs or sequencers.

5. **Modularity and Reusability**

Object-oriented design enables the creation of modular and reusable components, making it easier to develop, maintain, and upgrade the system. Objects and classes can be reused across different parts of the blockchain system, reducing redundancy and improving development efficiency.

6. **Automation**

Object-oriented design allows the automation of most processes by including objects in interdependent arrangements. Particularly, this makes it possible to roll out an event-based architecture, account abstraction, scheduled transactions, etc.

The table below sums up the comparison of the account-centric and the object-centric approaches in blockchains.

| Account-Centric Approach | Object-Centric Approach |
|--------------------------|-------------------------|
| • Lower scalability<br/>• Consecutive transaction execution<br/>• Restricted programmability<br/>• Slower and more complicated consensus | • Higher modularity<br/>• Higher scalability<br/>• Higher flexibility<br/>• Higher programmability<br/>• Transaction parallelization<br/>• Modularity and reusability<br/>• Automation |

## How Silvana Leverages Object-Centric Design

Silvana follows an object-oriented design which totally aligns with the object-centric blockchain narrative. However, Silvana extends this concept further by integrating **zero-knowledge proofs (ZKPs)**. This is how the object-centric design benefits Silvana:

* **Provable Records** - to represent assets, provable records are created with mutable states. Each time a state is mutated, a zero-knowledge proof is generated to prove the state correctness. This design is particularly suitable for **real-world assets (RWAs)** and empowers their adoption in crypto.

* Silvana uses Sui - an object-centric blockchain - as a **Settlement Layer** for the **Silvana Rollup** ensuring high transaction speed.

* Using provable records as objects helps build **modular**, **scalable**, and **privacy-preserving applications** with reusable custom business logic.

* Since provable records don’t assume a specific **global state layout** or a **single chain** or **execution environment**, this enables Silvana to be **chain-agnostic**, **tech-abstracted**, and have a **modular design** with **built-in data security**.

> ### **Note:**  
>  
> A **ZKP** is a cryptographic protocol that allows one party (a **prover**) to demonstrate to another party (a **verifier**) that a specific statement is true **without revealing any underlying information**. The Verifier is convinced of the claim's truthfulness but gains no additional knowledge beyond its validity.
> 
> **Provable Records** - digitally verifiable representations of crypto and real-world assets.
> 
> **Settlement Layer** - the foundational layer where transactions are validated, finalized, and recorded as immutable truth, ensuring consensus and security across the network.