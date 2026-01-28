---
id: dvp
title: Delivery Versus Payment (DvP)
sidebar_position: 2
---

# Delivery Versus Payment (DvP) — Canton's Response to Existing Insecurities

Canton Network implements **Delivery vs Payment (DvP)** transaction model that ensures atomic settlement while maintaining enterprise-level privacy and security.

## What's Wrong with Swaps Today?

Traditional swap mechanisms have serious structural limitations:

### Counterparty risk

In many swap flows, a) one party transfers an asset first, and b) the counterparty is expected to complete their side afterward. This creates a window where one side is exposed. Even smart-contract swaps can fail due to partial execution, reverted transactions after one transfer, and off-chain coordination errors.

### Escrow and custody assumptions

Typical swaps often rely on a) escrow contracts, b) intermediaries, and c) temporary custody of funds. This introduces trust assumptions, additional attack surfaces, and operational complexity.

### Settlement uncertainty

In standard swaps execution and settlement are often decoupled, finality may depend on multiple transactions, and failures can leave systems in inconsistent states.

### Poor fit for private or institutional trading

Public swap mechanisms expose trade intent, allow front-running and MEV, and leak pricing and strategy information.

---

## Atomic Settlement Across Multiple Chains

DvP is a settlement mechanism that ensures asset transfer occurs simultaneously with the payment. In traditional finance, DvP prevents scenarios where one party delivers assets without receiving payment, or vice versa. Canton Network extends this concept to a decentralized, multi-party environment where transactions can involve multiple participants across independent blockchains, while maintaining institutional-grade privacy and security.

:::tip
With atomic settlement, DvP effectively eliminates counterparty risk.
:::

## Two-Step Confirmation Process

Canton implements a two-phase confirmation process that ensures transaction integrity:

### Phase 1: Participant Preparation

Each participant prepares a **confirmation request** that provides different views of the transaction. This allows parties to see only the sub-transactions relevant to them while maintaining privacy for other participants.

### Phase 2: Sequencer Ordering

The confirmation request is submitted to a **sequencer** that orders all confirmation requests across the network. Critically, the sequencer performs only ordering and delivery functions — it cannot access or manipulate transaction content because message contents are encrypted.

---

## Privacy Through Sub-Transaction Isolation

One of Canton's key security features is **sub-transaction level privacy**.

Each party only receives and records the parts of a transaction that apply to them. In a DvP scenario, participants see only the sub-transactions where their parties are stakeholders.

:::tip
DvP prevents unnecessary information exposure and protects competitive strategies.
:::

This approach is essential for institutional use cases like treasury management and collateral trading, where competitors must not be able to front-run strategies or observe payment flows. It also prevents undesirable activity like arbitrage, MEV activity, or front-running.

## Encryption and Sequencing Architecture

The sequencer's message contents are encrypted and not visible to the sequencer itself. This design ensures the following:

- **Blind Ordering**: the Sequencer can order transactions without accessing their content;
- **Tamper Resistance**: the Sequencer cannot manipulate transaction details;
- **Privacy Preservation**: transaction data remains confidential during the ordering process.

---

## Global Synchronizer and Transaction Security Flow

:::tip
This enables private execution environments, making it suitable for institutional, bilateral, or agent-driven trading where confidentiality matters.
:::

Canton's Global Synchronizer uses a **2/3 majority Byzantine Fault Tolerant (BFT) consensus protocol** operated by independent Super Validators.

:::tip
This ensures fault tolerance, decentralization, and reliability.
:::

### Transaction Security Flow

A typical DvP transaction on Canton follows this secure flow:

1. **Transaction Initiation** — Participants create DAML contracts representing the asset transfer and payment that include conditions to be met for settlement. Each participant signs their part of the transaction.

2. **Privacy-Preserving Submission** — Transaction data is encrypted before submission. Only relevant sub-transactions are shared with each participant. Sequencer receives encrypted messages for ordering.

3. **Atomic Execution** — Global Synchronizer coordinates across blockchains. Settlement utility ensures both delivery and payment occur atomically.

4. **Finality and Settlement** — Validators verify transaction correctness. Settlement is recorded on all relevant blockchains. Participants receive confirmation of completed settlement.

:::tip
If any party fails to meet the contractual obligations and fulfil their part of the contract, settlement fails, and the transaction rolls back. No assets move from one account to another.
:::

---

## Comparison with Traditional Systems

| Feature | Traditional Arrangements | Canton DvP |
|--------|---------------------------|------------|
| **Settlement Time** | T+2 or longer | Near-instant |
| **Counterparty Risk** | Managed by intermediaries | Eliminated through atomicity |
| **Privacy** | Limited, requires trusted parties | Built-in, cryptographic |
| **Interoperability** | Single system | Cross-chain atomic |
| **Finality** | Reversible in some cases | Cryptographic finality |

---

## How Silvana Book Leverages DvP

Orders are matched off-chain in a private environment. Agents, orchestrated by Silvana's Coordination Layer, run execution on the networks where parties are.

Final settlement is executed on-chain via DvP, binding asset delivery and payment into a single, indivisible operation.

This guarantees that trades either fully settle at the agreed price or fail safely without exposing participants to counterparty risk, escrow dependencies, or partial execution, enabling fast, private, and deterministic trading workflows.
