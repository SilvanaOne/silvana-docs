---
sidebar_position: 3
---

# Object-Centric Design vs Account-Centric Design

# Account-Centric vs Object-Centric Design

Essentially, a blockchain has a dual nature. On the one hand, at its core, a blockchain is a **replicated deterministic state machine**, meaning that each transaction results in a change of state. On the other hand, a blockchain is a database where data is stored in blocks, and all pieces of such data are recorded in a cryptographically sophisticated way that rules out unauthorized data mutation.

<blockquote class="info">
  <strong>Information:</strong>  
  
  A **state machine** is a computer science concept whereby a machine can have multiple states but only one at any given time. There is a state, which describes the current state of the system and transactions that trigger state transitions.
</blockquote>

Conventionally, in blockchains, an **account** serves as the fundamental unit of data storage and interaction. Every transaction - be it a transfer of funds or a delegation - results in the transition of a state of the affected account and, largely, the state of the whole blockchain - making an account the central entity within blockchain ecosystems (see diagram below).

![Account-Centric Design](./img/account-centric-design.png)

While this approach has been widely adopted, it presents inherent structural limitations, namely:

1. **Scalability**

As the number of accounts and transactions increases, the blockchain can become congested, leading to slower transaction processing times and creating scalability obstacles. That’s what happened with Ethereum, giving rise to multiple L2 solutions designed to address this scalability issue.

2. **Programmability Restrictions **

Account-centered approach to data storage and management significantly impedes the deployment and execution of more complicated business logic, where each entity requires a different set of number of fields. Thus, on Mina, the number of AccountStates is restricted to 8. This effectively limits the potential programmability to several use cases.

3. **Complicated Consensus and no Parallel Transactions**

All transactions have to be processed and executed consecutively since each state transition for the affected account and for the blockchain has to run through Consensus and be signed by the majority of the validator set. It makes transaction parallelization impossible without either using roll-ups or introducing special nodes - sequencers and transaction builders - to do this job, which sufficiently complicates the blockchain design.

These limitations highlight the need for continuous research and development to improve the efficiency and security of account-centric blockchain designs. Object-centric blockchain design is a true game-changer pioneered by Sui, Aptos, and Solana. With object-centric design, data in a blockchain is arranged by **programmable objects** like with the **OOP** - **Object-Oriented Programming** - rather than by accounts. Such objects have fields that describe their states that get mutated (one or many) with each transaction due to a pre-defined logic described in an on- or off-chain smart contract. 

The diagram below illustrates how object-centric design works:

![Object-Centric Design](./img/object-centric-design.png)

Compared to the account-centric design, the object-centric design has the following benefits:

1. **Higher scalability**

Object-oriented blockchains are way faster as they allow for better organization, management, and storage of complex data structures and interactions.

2. **Higher programmability**

OOP-like objects can be part of more complex business logic deployed in smart contracts. Object-centric blockchains possess all characteristics of the OOP: encapsulation, inheritance, polymorphism, and abstraction.

3. **Higher flexibility**

Object-oriented design provides greater flexibility in defining and managing complex relationships between different entities, which can lead to more efficient and effective solutions.

4. **Transaction parallelization**

Since transactions can be broken up into the objects they’re associated with, there’s a possibility of several transactions running simultaneously. Moreover, it doesn’t require any blockchain design tweaks or complications like introducing data blobs or sequencers.

5. **Modularity and Reusability**

Object-oriented design enables the creation of modular and reusable components, making it easier to develop, maintain, and upgrade the system. Objects and classes can be reused across different parts of the blockchain system, reducing redundancy and improving development efficiency.

6. **Automation**

Object-oriented design allows the automation of most processes by including objects in interdependent arrangements. Particularly, this makes it possible to roll out an event-based architecture, account abstraction, scheduled transactions, etc.

The table below sums up the comparison of the account-centric and the object-centric approaches in blockchains.

| Account-Centric Approach | Object-Centric Approach |
|--------------------------|-------------------------|
| - Lower scalability | - Higher modularity |
| - Consecutive transaction execution | - Higher scalability |
| - Restricted programmability | - Higher flexibility |
| - Slower and more complicated consensus | - Higher programmability |
|  | - Transaction parallelization |
|  | - Modularity and reusability |
|  | - Automation |

Silvana follows an object-oriented pattern, which totally aligns with the emerging trend of an object-centric blockchain narrative. However, Silvana extends this concept further by integrating **zero-knowledge proofs (ZKPs)**, ensuring that **Provable Records** maintain privacy, regulatory compliance, and immutable verifiability without exposing sensitive data. This design is particularly suitable for the deployment and handling of **real-world assets (RWAs)** on-chain.

<blockquote class="info">
  <strong>Key Terms:</strong>
  
  **Provable Record** - Digitally verifiable representations of crypto and real-world assets.
  
  **Zero-Knowledge Proofs (ZKPs)** - A cryptographic protocol that allows one party (a **prover**) to demonstrate to another party (a **verifier**) that a specific statement is true **without revealing any underlying information**.
  
  **Real-world Assets (RWAs)** - Assets with real economic value that originate outside the blockchain but can be represented, traded, and managed digitally using blockchain technology.
</blockquote>