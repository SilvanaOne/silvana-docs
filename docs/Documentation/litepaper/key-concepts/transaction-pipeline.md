---
sidebar_position: 3
slug: /Documentation/key-concepts/transaction-pipeline
---
# Pipelined Transaction

## Overview

The notion of a **"transaction"** extends beyond a singular atomic operation in Silvana. Unlike monolithic systems that rely on centralized consensus or tightly coupled execution, Silvana's architecture enables each component of the pipelined transaction to operate **independently**, **asynchronously**, and on **different infrastructural backends**. 

A real-life use case is normally broken down into more atomic operations since it includes smaller pieces of business logic. Each such operation is run separately according to the business logic deployed in the corresponding module, and later is bundled in a holistic user transaction. 

## Pipelined Transaction

Each transaction in Silvana is decomposed into **multiple sub-transactions** that operate on different layers of the network, following this pipeline:

* [**Prover Transaction**](/Documentation/key-concepts/Transactions/prover-transaction);
* [**Coordination Transaction**](/Documentation/key-concepts/Transactions/coordination-transactions);
* [**DA Transaction**](/Documentation/key-concepts/Transactions/da-transaction);
* [**Settlement Transaction**](/Documentation/key-concepts/Transactions/settlement-transaction).

So when a user runs a user operation, the abovementioned transactions run one by one. We call this operation a **pipelined transaction**. It covers a whole use case or a business operation that can involve smaller operations, while the transactions that are part of the pipelined transaction are focused on each particular technical execution aspect, namely:

* proof generation;
* execution of business logic;
* proof aggregation;
* provable record state mutation;
* proof validation and settlement.

:::note Pipelined Transaction
Pipelined Transaction - a holistic transaction in Silvana covering a complete business operation that includes multiple atomic transactions of proof generation, business logic execution, proof aggregation, provable record state mutation, and proof validation and settlement.
:::

The table below provides some basic information about transaction types in Silvana:

| Transaction              | Layer                              | Function                                                                 |
|--------------------------|-------------------------------------|--------------------------------------------------------------------------|
| Prover Transaction        | Silvana Core                        | Proof generation                                                         |
| Coordination Transaction | Coordination Layer (Silvana Rollup)| • Transaction ordering and sequencing; <br/>• Execution of atomic custom logic; <br/>• Proof aggregation; <br/>• Transaction acceleration. |
| Settlement Transaction   | Settlement Layer                    | • Checking and validating recursive proofs                               |
| DA Transaction           | Data Availability (DA) Layer        | • Provable record state mutation; <br/>• Generating proof of the state mutation; <br/>• Proof storage. |

The diagram below illustrates the Pipelined Transaction in Silvana:

![Pipelined Transaction](..\key-concepts\img\transaction-pipeline.png)

## Real-Life Case: User Wallet Migration with Embedded Reward Claim

Let's see what a pipelined transaction looks like on a real-life example.

### Case

Bob decides to migrate his wallet from an old rollup to a new one on a decentralized application built on Silvana. Meanwhile, during the migration, he wants to claim the pending reward and update his on-chain profile.

Since this pipelined transaction involves multiple modules (wallet migration logic, reward module, user profile module), Silvana splits them into multiple Coordination Layer transactions, even though Bob triggered a single action only.

### Transaction Flow

1. **Prover Transaction**.

1.1. The **Agent** picks up the user operation and calls the Prover

1.2. The Prover executes all three tasks inside a zk-SNARK circuit under constraint logic:

1.2.1. Verify wallet migration logic.

1.2.2. Verify reward eligibility.

1.2.3. Validate profile update data.

1.2.4. Generate proofs - one for each piece of business logic.

**Outputs**:

* New rollup state commitment.

* Multiple proof CIDs for the three tasks:

  * **Proof 1** → Wallet migration

  * **Proof 2** → Reward claim

  * **Proof 3** Profile update

2. **Coordination Transaction**.

2.1. Coordination Layer calls smart contracts to execute 3 Coordination Transactions - one for each piece of business logic:

2.1.1. **Coordination Tx 1**:

**Action**: Wallet ownership migration

**Output**: Emits an event recording new ownership.

2.1.2. **Coordination Tx 2**:

**Action**: Reward payout logic

**Output**: Emits event confirming reward transferred.

2.1.3. **Coordination Tx 3:**

**Action**: Profile metadata update

**Output**: Emits event confirming profile data updated.

The system aggregates these into an intermediate coordination hash.

2.2. Coordination Layer aggregates the previously generated proofs in a single **recursive proof**.

3. **DA Transaction**.

3.1. DA Layer compares the old and the new state of the corresponding provable record and records the updated state.

3.2. DA Layer generates proof for the updated state. 

**Output**: Proof for the updated state of the provable record.

4. **Settlement Transaction**.

4.1. Recursive proof is submitted to the Settlement Layer.

4.2. Validators sign the proof.

4.3. Settlement Transaction is recorded in the Settlement Layer and finality is reached.

**Output of running the pipelined transactions**:

The provable record gets updated in the DA Layer;

* 3 transactions are executed on the Execution (Coordination) Layer;

* A recursive proof is validated and recorded on the Settlement Layer.

* The diagram below illustrates the case:

![Pipelined Transaction - Case](..\key-concepts\img\case-pipeline.png)