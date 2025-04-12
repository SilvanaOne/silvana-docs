---
sidebar_position: 2
---

# Agents

## Overview

Silvana has a complicated modular and multi-layer architecture with multiple components that can be deployed in different ways. Handling the deployment manually would be a challenging task. That’s when agents kick in. An **agent** is a mechanism of automated launch of decentralized applications. In a way, an agent is a wrapper that joins the necessary Silvana components to perform the application functions.

Each agent implements and is built around a particular real-life use case - car lending, issuing and verifying documents, insurance, accounting, etc. A use case may require more than one module to be implemented. An agent assembles all the necessary components of different Silvana architectural layers: Prover and Verifier from Silvana Core, ZkProgram from the Module, ABI, modules, etc.

Each component that an agent engages in an application can be deployed in three environments:

* **Private Execution Environment (PXE)** - a component is deployed privately, on the consumer’s local infrastructure;

* **Cloud Execution Environment (CEE)** - a component is deployed in the **Silvana Cloud**;

* **Trusted Execution Environment (TEE)** - a component is deployed in the **Secure Enclave** of the Silvana Cloud.

Agents, like modules, are deployed by application developers. Each application can use one or multiple agents, depending on how many use cases it wants to implement. After deployment, agents can be bought and sold on Silvana Marketplace.

## How to Use an Agent

To deploy and use an agent, a user has to follow these steps:

1. Add the **repo** of the module or modules as a dependency. 

2. To generate proofs, Agents have to get access to the Prover Program describing the proof generation rules, the Prover executing the **Prover Function (Circuit)**, and the Verifier executing the **Verifier Function (Circuit)**.

3. Add all other Silvana components depending on which functions are required.

> **Terms**  
>
> * **Prover** - Silvana Core component responsible for the generation of ZK proofs based on provable record state changes.
> 
> * **Verifier** - Silvana Core component responsible for the verification the generated ZK proofs.
> 
> * **ABI** - Silvana Core component responsible for building, compiling, sending, and monitoring transactions.
> 
> * **Prover Function (Circuit)** - the function allowing one party (the prover) to demonstrate to another party (the verifier) that they possess certain information without revealing the actual data itself.
> 
> * **Verifier Function (Circuit)** - the function allowing one party (the validator) validate the proof provided by another party (the prover) without gaining access to the actual information being proved.
> 
> * **Prover Program** - the business logic that rules how a proof has to be generated and verified.

The diagram below illustrates Silvana Agents.

![Silvana Agents](./img/silvana-agents.png)

## Agents to Automate Silvana

Using Agents helps automate Silvana functions and allows a wide array of useful options:

* **Account Abstraction**: Agents have a built-in user signature that enables transactions to run within the limits defined by the user without the necessity to be initiated directly by a user.

* **Scheduled Transactions**: Now transactions can run at a pre-planned time.
* **Pre-paid Transactions**: Users pay for transactions long before they run.
* **Event-triggered Transactions**: Transactions can be called by particular events that the Silvana agent catches as a witness. This allows for building apps with an event-based architecture. There needs to be some kind of middleman between modules and enterprises. In Silvana, those are agents that act both as interfaces and application builds.

Agents, like modules, are deployed by developers. After deployment, agents can be bought and sold on Silvana Marketplace.

## Agent Types

Agents come in the following types:

* **Data Layer Agents**: responsible for securely storing and managing data in a decentralized fashion.
* **Proving Agents**: process cryptographic verification, delivering proofs with high certainty and minimal human intervention.

Potentially, Silvana Agents can also extend to:

* **ZKML Agents**: this layer enables machine learning models to run in zero-knowledge and provable mode. It offers sophisticated data insights without exposing raw data and with proof of the model training set used.
* **AI Agents**: Can operate in secure enclaves or as standard AI modules, generating insights or additional encrypted data interpretations.
* **Human Agents**: Includes professionals or individuals who can provide manual checks, audits, or expert opinions.
* **Professional Agents**: Domain experts (finance, insurance, accounting, compliance) who add authoritative validation to marketplace proofs.