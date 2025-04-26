---
sidebar_position: 4
---
# Router
## Overview
In the overall Silvana architecture, the Router sits at the intersection of the [**Application Layer**](/Documentation/architecture/Layers/application-layer) (where business-specific modules and schemas are defined) and the [**Silvana Core**](/Documentation/architecture/silvana-core/) (where proving and verification occur).

:::note Router
The **Router** is a component that responsible for managing and providing access to provable record [**schemas**](/Documentation/glossary#schema) and their associated **zero-knowledge programs (Prover Programs)**. It acts as a registry that maintains the mapping between record types and the ProverPrograms that define their behavior.
:::

In implementation, the Router consists of a structured set of **YAML files**, representing interfaces, schema definitions, and application configurations. It is exposed through an endpoint capable of answering a variety of structured queries. Essentially, the Router is an interface applications use to interact with [**provable records**](/Documentation/key-concepts/provable-records).

## Capabilities and Scope
The router is responsible for the following functions:

1. **Managing Provable Record Schemas**

The Router's primary responsibility is to manage the lifecycle of **provable record schemas**. It also maintains a centralized registry of all provable record schemas used in the system. A schema in Silvana defines the structure of a record-essentially a blueprint of its fields and data types. The Router provides functionality to:
* **create** a new schema, 
* **read/query** existing schemas, 
* **update (mutate)** a schema if needed, and
* **delete** schemas that are no longer used.

2. **State Queries**

**Applications** query the Router to retrieve the schema of a specific provable record, enabling correct data interpretation. They then use this schema to call [**Agent**](/Documentation/Deployment/agents) services or other [**APIs**](/Documentation/glossary#api-application-programming-interface) to fetch the current record state from the data layer.

3. **Agent Coordination**

The Router is capable of discovering and **invoking Agents** associated with a given schema or application. These agents automate operations such as proof generation and transaction execution. The Router facilitates this discovery based on application configuration.

4. **Interface Execution**

The Router can **execute any entities or actions defined within an interface**. This includes calling methods that generate proofs, querying the state of provable records, and initiating verification flows using defined logic. All requests are executed in strict accordance with the registered schema and Prover Program bindings.

5. **Cross-party Verification**

A counterparty queries the Router to obtain the official schema and associated verifier circuit, ensuring they can independently and trustlessly verify the validity of a received proof **without relying on the data sender**.

6. **Prover Program Association**

Each schema is linked to a specific [**Prover Program**](/Documentation/glossary#prover-program), which encodes the rules and constraints for state transitions of that record type. The Router stores these associations, enabling the system to determine which logic to use during proof generation and verification.

7. **Security and Visibility Controls**

Planned future enhancements include zone-based visibility limitations and role-based access control to restrict schema access and operation execution by policy or permission.

## Schema Storage and Access

All provable record schemas in Silvana are **created and stored in the Router's registry**. When a developer wants to introduce a new type of provable record, they start by defining its schema and registering it via the Router. 

The important point is that the Router is the **go-to service for any schema lookup**. For instance, if a [**Verifier**](/Documentation/architecture/silvana-core/verifier) wants to ensure they have the latest schema, they fetch it from the Router at verification time. If a developer wants to see if a similar schema already exists (perhaps to reuse an existing template), they would search the Router's records. Because the Router maintains *"all schemas within the system"*, it provides a comprehensive view of the data structures available in Silvana.

### Schema Example in Router

Here is a minimal YAML-based schema definition that might be registered with the Router:
```yaml
schemas:
  - id: "user.trading.account"
    version: 1
    fields:
      baseTokenBalance: TokenBalance
      quoteTokenBalance: TokenBalance
      bid: Order
      ask: Order
      nonce: bigint
    ProverProgramId: "trading.ProverProgram.v1"
```
Once registered, this schema becomes part of the Router's registry and can be queried via API or used during proof generation. The ***`ProverProgramId`*** field links the schema to a specific proving circuit, ensuring verifiability and consistency across all consumers of the record type.

* When the schema for ***`user.trading.account`*** is registered, the Router persists the **structure**, its **version**, and the associated **proving program** (***`ProverProgramId`***). This ensures global discoverability and consistency.

* When a Prover or Verifier needs to generate or validate a proof, it queries the Router using the schema ID (***`user.trading.account`***) to retrieve the latest or specified version of the schema.

* The Router guarantees that **each schema is cryptographically linked** to the correct ***`ProverProgramId`***. This avoids mismatches between data format and proving logic.

## Business Use Cases

Below are some examples of how the Router handles schemas for businesses. This list is not exhaustive, yet indicative.

1. **Digital Identity Verification**

A clients can register identity record schemas (e.g., KYC documents) with the Router and use them across multiple applications to verify user credentials via zero-knowledge proofs without exposing sensitive data.

2. **Patent and IP Management**

A tech company can define a schema for patent ownership in the Router, enabling zk-based licensing deals where ownership is verified cryptographically without disclosing confidential patent documents.

3. **Supply Chain Asset Tracking**

Organizations can create schemas for assets (e.g., shipment records) that are verified and updated securely across vendors, ensuring traceable and tamper-proof supply chain provenance.

4. **Real Estate Records**

Property registrars or real estate platforms can publish schemas for title deeds, enabling private verification of ownership and transaction history when transferring property or applying for mortgages.

5. **Insurance Claims Processing**

Insurers can register claim schemas, allowing claims to be submitted and verified privately, ensuring the claimant meets policy conditions without revealing sensitive medical or financial details.

6. **Carbon Credit Certification**

Environmental organizations can define standardized schemas for carbon credits in the Router, allowing regulated, cross-border trade with verifiable emissions data validated without disclosing proprietary details.

7. **Academic Credential Verification**

Universities can register degree schemas, enabling graduates to prove academic qualifications cryptographically to employers without sharing full transcripts or diplomas.

8. **Decentralized Finance (DeFi) Protocols**

DeFi platforms can use schemas for financial instruments (e.g., bonds, derivatives) to standardize records and enforce compliance via Prover Programs, enabling trustless interaction between financial entities.

9. **Healthcare Data Exchange**

Healthcare providers can register schemas for medical records and test results, allowing patients to prove health status (e.g., vaccination or test outcomes) without revealing the full medical file.

10. **Auditing and Compliance**

Firms can define compliance record schemas for internal audits, enabling external regulators to verify compliance claims cryptographically, without granting access to all internal documentation.

## Security Model Aspects

This is how the Router ensures data security while handling provable record schemas.

1. **Schema Integrity and Immutability**

Once a schema is in use, the Router enforces immutability or versioning to prevent unauthorized or accidental changes that could invalidate prior proofs. This guarantees that proofs remain valid and verifiable over time.

2. **Authentication and Access Control**

Only authorized roles can create or modify schemas, ensuring that **schema definitions** and **Prover Program mappings** are protected from unauthorized alterations.

3. **Cryptographic Linkage**

Proofs are cryptographically tied to specific Prover Programs, and the Router enforces the association between schemas and programs, making it impossible to verify a proof with the wrong logic.

4. **Isolation from Tampered Modules**

Modules containing Prover Programs are registered but not executed by the Router, preventing malicious module code from corrupting schema-program mappings or the Router's operation.

5. **Secure Execution of Router (TEE deployments)**

When deployed in a **Trusted Execution Environment (TEE)**, the Router benefits from hardware-level tamper resistance, ensuring that even infrastructure administrators cannot alter its behavior or stored data.

6. **Data Privacy**

Schemas themselves are generally non-sensitive, but the Router supports private schema visibility and access restrictions, allowing clients to control exposure of proprietary data structures.

7. **Resilience and Redundancy**

Router instances can be replicated and cached across nodes or environments, ensuring high availability and fault tolerance without compromising consistency.

8. **Tamper Evidence**

By optionally committing schema hashes on-chain or maintaining audit trails, the Router ensures that any unauthorized changes to schema definitions are detectable and can be publicly verified.