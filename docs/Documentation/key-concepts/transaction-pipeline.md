---
sidebar_position: 3
---
# Transaction Pipeline
## Overview

The notion of a **"transaction"** extends beyond a singular atomic operation in Silvana. Unlike monolithic systems that rely on centralized consensus or tightly coupled execution, Silvana's architecture enables each component of the transaction pipeline to operate **independently**, **asynchronously**, and on **different infrastructural backends**. 

A real-life use case is normally broken down into more atomic operations since it includes smaller pieces of business logic. Each such operation is run separately according to the business logic deployed in the corresponding module, and later is bundled in a holistic user transaction. 

## Transaction Pipeline

Each transaction is decomposed into **multiple sub-transactions** that run on different layers of the network and follows this pipeline: 
* **Proof Transaction**;
* **Coordination Transaction**;
* **Settlement Transaction**;
* **DA Transaction**
. 
The diagram below illustrates the Transaction Pipeline in Silvana:


The table below provides some basic information about transaction types in Silvana:

| Transaction              | Layer                              | Function                                                                 |
|--------------------------|-------------------------------------|--------------------------------------------------------------------------|
| Proof Transaction        | Silvana Core                        | Proof generation                                                         |
| Coordination Transaction | Coordination Layer (Silvana Rollup)| • Transaction ordering and sequencing; <br/>• execution of atomic custom logic; <br/>• proof aggregation; <br/>• transaction acceleration. |
| Settlement Transaction   | Settlement Layer                    | • Checking and validating recursive proofs                               |
| DA Transaction           | Data Availability (DA) Layer        | • Provable record state mutation; <br/>• Generating proof of the state mutation; <br/>• Proof storage. |

## Proof Transaction

The first transaction in the pipeline In Silvana - Proof Transaction - runs in a prover, be it the Prover in the Silvana Core, or any other type of prover involved. For more information on how zk proofs are generated, see these docs: **Zk Proofs** and **Prover**.

:::tip Note
Silvana supports **multi-proof generation** per transaction job, often producing several proofs to enable parallelism and fine-grained execution tracking.
:::

This proof stage is computationally intensive and typically lasts a few minutes per job. The agent logs record the runtime and timestamps for each step. Once proof generation concludes, the agent prepares metadata including proof references, transaction payload digests, and initial coordination instructions. 

Below is an example of what a generated proof looks like:

