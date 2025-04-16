---
sidebar_position: 2
---

# Agents

## Overview

Silvana has a complicated modular and multi-layer architecture with multiple components that can be deployed in different ways. Handling the deployment manually would be a challenging task. That’s when Agents kick in. 


> **Terms**  
>
> **Silvana Agents** are programmable, decentralized entities designed to automate the lifecycle of transactions and application logic across Silvana’s modular architecture. Functioning as execution orchestrators, Agents wrap and interconnect core components such as Prover Programs, provable record schemas, Provers, Verifiers, and ABI interfaces..

Agents **abstract away operational complexity**, enabling developers and integrators to deploy robust, event-driven applications without directly interacting with every layer of the Silvana stack. In a way, Agents are simultaneously an interface though which applications interact with Silvana wrapping the required Silvana components.

Agents are fundamental in realizing Silvana’s object-centric, ZK-native infrastructure for decentralized business logic and Real-World Asset (RWA) management.

## Key Functions

Agents are not just automation scripts or bots. Their main role is to bridge application logic with cryptographic proof generation and validation, ensuring seamless interactions across system layers. That’s what Silvana agents do:

* **Bind modules**, **Prover Programs**, and **Silvana Core components** together into coherent, executable workflows.

* **Ensure scheduled execution** empowering developers to define transactions that will run automatically at a predetermined time. 

* **Integrate across environments**: local (PXE), cloud-based (CXE), or trusted execution enclaves (TEE).

* **Compute and verify zero-knowledge proofs** when records are created, mutated, or deleted.

* **Ensure account abstraction** allowing them to execute transactions based on predefined user permissions without requiring direct user initiation.

* **Support prepaid transaction** that enable users to fund transactions ahead of time. Once funded, Agents can autonomously trigger these transactions when relevant criteria are satisfied, reducing friction in decentralized execution.

* **Empower event-driven logic** to enable transaction automation.

This visual shows that agents are not bound to a fixed architecture - instead, they are **compositional entities**. Each one can orchestrate multiple modules and ZK programs to meet the unique needs of the application.

![Silvana Agents](./img/silvana-agents.png)

## How to Use an Agent

To deploy and use an agent, a user has to follow these steps:
1. **Add the repo** of the module or modules as a dependency. All available and upcoming modules are maintained or referenced in the [**Silvana GitHub repository**](https://github.com/SilvanaOne), which is the central source for example implementations, module templates, and SDKs.

2. **Generate proofs** by letting the Agents have to get access to the **Prover Program** describing the proof generation rules, the **Prover** executing the **Prover Function** (**Circuit**), and the **Verifier** executing the **Verifier Function** (**Circuit**).

3. **Attach other Silvana components** depending on your application. This can include the **ABI** for interfacing, state storage, event handlers, or logic to respond to external inputs. The agent acts as the coordinator for all these parts, triggering the right calls at the right time.

## Agents to Automate Silvana

Using Agents helps automate Silvana functions and allows a wide array of useful options:

* **Account Abstraction**: Agents have a built-in user signature that enables transactions to run within the limits defined by the user without the necessity to be initiated directly by a user.

* **Scheduled Transactions**: Now transactions can run at a pre-planned time.
* **Pre-paid Transactions**: Users pay for transactions long before they run.
* **Event-triggered Transactions**: Transactions can be called by particular events that the Silvana agent catches as a witness. This allows for building apps with an event-based architecture. There needs to be some kind of middleman between modules and enterprises. In Silvana, those are agents that act both as interfaces and application builds.

## Developer Notes
Agents are ideal for applications that need automation, reliability, and auditability. Their modular structure supports development best practices such as separation of logic, reusable components, and configurable behavior.

Here are some general recommendations when building with Agents:

* **Start with a clear definition** of the application workflow, then break it down into discrete modules.
* **Reuse existing modules where possible**, especially for common tasks like identity, signatures, or compliance.
* **Use Prover Programs as composable proof strategies** that your Agent can call during execution.
* **Keep the Agent logic focused on orchestration** - think of it as the “conductor” for your application components
* **Test your agent thoroughly** with mock transactions and simulated proof requests. Always cover edge cases, invalid inputs, and potential proof failures.
* **Publish your agent** to the **Silvana Marketplac** once it’s tested and ready. It can then be reused, extended, or monetized by other developers and integrators.

## Agent Types

Agents come in the following types:

* **Data Layer Agents**: responsible for securely storing and managing data in a decentralized fashion.
* **Proving Agents**: process cryptographic verification, delivering proofs with high certainty and minimal human intervention.

Potentially, Silvana Agents can also extend to:

* **ZKML Agents**: this layer enables machine learning models to run in zero-knowledge and provable mode. It offers sophisticated data insights without exposing raw data and with proof of the model training set used.
* **AI Agents**: Can operate in secure enclaves or as standard AI modules, generating insights or additional encrypted data interpretations.
* **Human Agents**: Includes professionals or individuals who can provide manual checks, audits, or expert opinions.
* **Professional Agents**: Domain experts (finance, insurance, accounting, compliance) who add authoritative validation to marketplace proofs.