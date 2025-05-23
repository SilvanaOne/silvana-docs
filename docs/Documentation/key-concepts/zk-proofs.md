---
sidebar_position: 1
---

# Zero-Knowledge Proofs

## Overview

Balancing security and privacy has become a crucial challenge in the current digital landscape. Enterprises and individuals alike require trustless verification methods that do not compromise sensitive data. Traditional security models rely on extensive data exposure, where verifying a transaction, compliance, or ownership often reveals more information than necessary. The emergence of **Zero-Knowledge Proofs (ZKPs)** represents a paradigm shift, offering an approach where verification does not necessitate disclosure.
A **ZKP** is a cryptographic protocol that allows one party (prover) to demonstrate to another party (**verifier**) that a specific statement is true **without revealing any underlying information**. The Verifier is convinced of the claim's truthfulness but gains no additional knowledge beyond its validity.

Two types of data exist in a ZKP transaction: the **Private Input** and the **Public Input**. A prover and a verifier are smart contracts that contain the [**Prover Program**](/Documentation/glossary#prover-program). The Prover runs the [**prover function (circuit)**](/Documentation/architecture/silvana-core/prover#prover-function) to generate proof, and the Verifier runs the [**verifier function (circuit)**](/Documentation/architecture/silvana-core/verifier/#verifier-function) to verify the generated proof.
- The [**Prover**](/Documentation/architecture/silvana-core/prover) is called by the user, who must provide proof of the private input, 
- [**Counterparty**](/Documentation/glossary#counterparty) calls the [**Verifier**](/Documentation/architecture/silvana-core/verifier) - a partner, a regulator, an individual, etc.

For a proof to be considered zero-knowledge, it must satisfy three fundamental properties:

1. **Completeness** – if a statement is true, an honest verifier will be convinced by an honest prover.
2. **Soundness** – if a statement is false, a dishonest prover cannot convince the Verifier that it is true.
3. **Zero-Knowledge** – the proof reveals no information other than the statement's validity.

## How ZKPs work

Zero-knowledge proofs (ZKPs) enable secure data verification without revealing the data itself. The process involves structured steps that ensure transaction integrity while maintaining privacy.

ZKP Transaction flow now looks like this:

1. **User** initiates a transaction by providing the **Private Input**, the **Public Input**, and a **Signature**.
2. **Tx Builder** provides **Prover** with **public** and **private inputs**.
3. **Prover** executes the **Prover Function** and uses the **Prover Program** to generate the **ZK Proof (proof job)**.
4. The **Verifier** executes the **Verifier Function** and uses the **Prover Program** to verify and cryptographically sign the **ZK Proof**.
5. **Tx Builder** provides **Prover** with **public** and **private inputs**.
6. The verified **ZK Proof** is stored in the **Data Availability (DA) layer**.
7. The **Tx Builder** uses the **Public Input** and the **ZK Proof** to build a **ZK transaction**.
8. The **counterparty** signs the **ZK transaction**.
9. The zk Transaction is sent to the Settlement Layer (L1 or L2 blockchain).

The diagram below shows how ZKPs work.

![How Zk Proofs Work](./img/how-zk-proofs-work.png)

## Real-World Case: Intangible Asset Verification

### Company: CertiChain – Blockchain-Based Digital Asset Certification

CertiChain is a **blockchain-based certification platform** that allows companies and individuals to verify the authenticity of intangible assets such as patents, digital artwork, music rights, and academic certifications. The company provides a Zero-Knowledge Proof (ZKP)-based verification system that ensures authenticity without exposing confidential information.

### Case: Patent Ownership Verification for Licensing Deal

  A large technology firm, TechNova, wants to license a patent from an independent researcher, Dr. Lian Zhou. However, before proceeding with the contract, TechNova needs proof that Dr. Zhou is the legitimate patent owner. While proving ownership, Dr. Zhou does not want to expose sensitive details, such as unpublished patents or confidential legal agreements.

The table below outlines what each actor and component wants to achieve with a ZKP transaction.

| Actor | Role | Goal |
|-------|------|------|
| Dr. Zhou | Patent Owner | Prove ownership of the patent without exposing private details. |
| TechNova | Licensee - Counterparty | Verify the proof before committing to a multi-million-dollar licensing agreement. |
| Silvana | Prover | Generate ZK proof for the patent details. |
| Silvana | Verifier | Verify ZK proof for the patent details. |

**Mapping to ZKP Transaction Flow**

**Step 1**: User (Patent Owner) Initiates Transaction.

**Dr. Zhou** (User) provides:

- **Private Input**: Full patent details
- **Public Input**: Patent hash
- **Signature**: Digital signature for authentication
```json
{
  "private_input": {
    "owner_wallet": "B62qpnqhvK...",
    "patent_id": "US-987654321",
    "full_patent_document": "encrypted_base64_data"
  },
  "public_input": {
    "patent_hash": "0xABCD1234EF5678",
    "issuer": "CertiChain",
    "timestamp": "28.02.2025 UTC 09:40"
  },
  "signature": "0xSIG123456789"
}
```
:::warning Warning
If a signature mismatches, the process stops.
:::

**Step 2**: Tx Builder (ABI) Sends Inputs to Prover
- **Tx Builder** prepares the inputs and sends them to **Prover**.

**Step 3**: Prover Executes Prover Function & Generates ZK Proof
Prover runs cryptographic operations using the **ZK Program** to prove:
- The patent exists.
- Dr. Zhou owns it.
A **ZK Proof** is generated.
```json
{
  "zk_proof": "0xDEF456GH789IJ",
  "validity": "true",
  "proof_timestamp": "28.02.2025 UTC 09:41"
}
```

:::tip Success
ZK Proof was successfully created.
::: 

**Step 4**: Prover Sends ZK Proof to Verifier.
- The Verifier receives the **ZK Proof**.

**Step 5**: Verifier Executes Verifier Function & Signs Proof.
- The Verifier runs the ZK Program's Verifier Function.
- The proof is checked cryptographically against public data.
- If the proof is valid, the Verifier signs it.
- If not, the transaction gets aborted.

**Verifier Signed Proof Output**
```json
{
  "verified_proof": "0xVERIFIED123ABC",
  "patent_hash": "0xABCD1234EF5678",
  "validity": "true",
  "signing_timestamp": "28.02.2025 UTC 09:42"
}
```

:::warning Warning
If the proof fails, the verification halts.
:::

**Step 6**: Tx Builder Builds ZK Transaction.
- The **verified proof** is stored in the **DA Layer** for future reference.

**Stored Proof Record**
```json
{
  "zk_proof_id": "zkp-09345",
  "verified_proof": "0xVERIFIED123ABC",
  "patent_hash": "0xABCD1234EF5678",
  "storage_timestamp": "28.02.2025 UTC 09:42"
}
```

:::tip Success
Proof securely recorded.
::: 

**Step 7**: **Tx Builder** Uses Public Input & ZK Proof to Build a **ZK Transaction**.
- The Tx Builder builds the ZK Transaction.
**ZK Transaction Build**
```json
{
  "transaction_id": "txn-56789",
  "zk_proof_id": "zkp-09345",
  "public_input": "0xABCD1234EF5678",
  "proof": "0xVERIFIED123ABC"
}
```
**Step 8**: Counterparty (TechNova) Signs the ZK Transaction.
- TechNova (Counterparty) reviews and signs the transaction.
**TechNova's Signed Transaction**
```json
{
  "transaction_id": "txn-56789",
  "counterparty_signature": "0xTECHSIG987654"
}
```

:::tip Success
The counterparty has signed and approved the transaction.
::: 

**Step 9**: ZK Transaction is Sent to the Settlement Layer (L1 or L2 blockchain).

**Step 9**: ZK Transaction Sent to Settlement Layer (Blockchain L1/L2)
- The final ZK Transaction is published to the blockchain.
- **Settlement** completed securely, with patent verification recorded permanently.
**Final Settlement Record on Blockchain**
```json
{
  "transaction_id": "txn-56789",
  "zk_proof_id": "zkp-09345",
  "blockchain_record": "0xBLOCKHASH123456"
}
```

:::tip Success
The transaction is now immutable on-chain.
::: 

**Final Outcome: Secure, Private Patent Verification**

- Dr. Zhou's patent ownership is cryptographically verified.
- TechNova has proof of authenticity without exposing private details.
- The verification is permanently stored for future licensing deals.
- Re-verification is needed for future licensing or disputes.
The diagram below shows the flow of the use case.

![Patent Verification Flow](./img/zkp-flow.png)

### Key Takeaways from the ZKP Flow

1. **Privacy**: Patent details never exposed.
2. **Security**: Only cryptographic proof is shared.
3. **Trustless Verification**: TechNova does not need to trust Dr. Zhou.
4. **Efficiency**: The entire process is automated and immutable.

## How Silvana Uses ZKPs

Silvana implements Zero-Knowledge Proofs (ZKPs) to ensure privacy and security in its transaction validation process. Below is a detailed breakdown of how proofs are generated, who is responsible for different stages, the architectural layers involved, and the components engaged in the process.

**Silvana ZKP Infrastructure**
| Stage | Who Performs It | Process Description | Architectural Layer | Components Involved |
|-------|-----------------|---------------------|---------------------|---------------------|
| Transaction Build | User / Smart Contract | A transaction request includes private (sensitive asset data) and public inputs (metadata, timestamps). A hash of sensitive data is generated. | Private + Cloud Application Layer | User Interface, Smart Contracts |
| Sequencing & Ordering | Sequencer (Silvana Network) | The transaction is added to a mempool, ordered for execution, and checked for double spending before moving to the proving stage. | Blockchain Execution Layer | Sequencer Node |
| Zero-Knowledge Proof (ZK Proof) Generation | zkProver (Enterprise-side) | The zkProver verifies that private inputs satisfy the defined rules without revealing sensitive data and then generates a cryptographic proof. | Private Execution Layer | zkProver Node |
| Proof Verification | Verifier (Silvana Network) | The Verifier checks the proof's validity using cryptographic verification. If the proof is valid, it is confirmed and recorded. If invalid, the transaction is rejected. | Trusted Execution Layer | Verifier Node |
| Proof Storage & Compliance | Silvana Core System | The proof and metadata are stored in the Silvana ledger, ensuring auditability without exposing sensitive data. | Data Availability Layer | Storage Nodes, Compliance System |

