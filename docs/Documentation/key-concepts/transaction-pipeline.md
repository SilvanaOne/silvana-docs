---
sidebar_position: 3
---
# Pipelined Transaction

## Overview

The notion of a **"transaction"** extends beyond a singular atomic operation in Silvana. Unlike monolithic systems that rely on centralized consensus or tightly coupled execution, Silvana's architecture enables each component of the pipelined transaction to operate **independently**, **asynchronously**, and on **different infrastructural backends**. 

A real-life use case is normally broken down into more atomic operations since it includes smaller pieces of business logic. Each such operation is run separately according to the business logic deployed in the corresponding module, and later is bundled in a holistic user transaction. 

## Pipelined Transaction

Each transaction in Silvana is decomposed into **multiple sub-transactions** that run on different layers of the network and follows this pipeline: 

* **Prover Transaction**;
* **Coordination Transaction**;
* **DA Transaction**;
* **Settlement Transaction**.

So when a user runs a user operation, the abovementioned transactions run one by one. We call this operation a **pipelined transaction**. It covers a whole use case or a business operation that can involve smaller operations, while the transactions that are part of the pipelined transaction are focused on each particular technical execution aspect, namely:

* proof generation;
* execution of business logic;
* proof aggregation;
* provable record state mutation;
* proof validation and settlement.

:::note Pipelined Transaction
Pipelined Transaction - a holistic transaction in Silvana covering a complete business operation that includes multiple atomic transactions of proof generation, business logic execution, proof aggregation, provable record state mutation, and proof validation and settlement.
:::

The diagram below illustrates the Pipelined Transaction in Silvana:

![Pipelined Transaction](..\key-concepts\img\transaction-pipeline.png)

The table below provides some basic information about transaction types in Silvana:

| Transaction              | Layer                              | Function                                                                 |
|--------------------------|-------------------------------------|--------------------------------------------------------------------------|
| Prover Transaction        | Silvana Core                        | Proof generation                                                         |
| Coordination Transaction | Coordination Layer (Silvana Rollup)| • Transaction ordering and sequencing; <br/>• Execution of atomic custom logic; <br/>• Proof aggregation; <br/>• Transaction acceleration. |
| Settlement Transaction   | Settlement Layer                    | • Checking and validating recursive proofs                               |
| DA Transaction           | Data Availability (DA) Layer        | • Provable record state mutation; <br/>• Generating proof of the state mutation; <br/>• Proof storage. |
