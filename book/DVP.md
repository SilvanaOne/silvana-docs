---
id: dvp
title: Delivery Versus Payment (DvP)
sidebar_position: 2
---

# Secured Transactions Via DVP

## What's Wrong with Swaps Today?

Traditional swap mechanisms have serious structural limitations:

### Counterparty Risk

In many swap flows, a) one party transfers an asset first, and b) the counterparty is expected to complete their side afterward. This creates a window where one side is exposed. Even smart-contract swaps can fail due to partial execution, reverted transactions after one transfer, and off-chain coordination errors.

### Liquidity Pool Vulnerabilities

Liquidity pools are a common way to make swap operations. However, these arrangements turn out to be inefficient because they expose participants to slippage, impermanent loss, and pricing that depends on arbitrary curve mechanics rather than real market demand.

### Escrow and Custody Assumptions

Typical swaps often rely on a) escrow contracts, b) intermediaries, and c) temporary custody of funds. This introduces trust assumptions, additional attack surfaces, and operational complexity.

### Settlement Uncertainty

In standard swaps execution and settlement are often decoupled, finality may depend on multiple transactions, and failures can leave systems in inconsistent states.

### Poor Fit for Private or Institutional Trading

Public swap mechanisms expose trade intent, allow front-running and MEV, and leak pricing and strategy information.

## Delivery Versus Payment (DvP) - Canton’s Response to Existing Insecurities

Canton Network implements **Delivery vs Payment (DvP)** transaction model that ensures atomic settlement while maintaining enterprise-level privacy and security.

---

### Atomic Settlement Across Multiple Chains

DvP is a settlement mechanism that ensures asset transfer occurs simultaneously with the payment. In traditional finance, DvP prevents scenarios where one party delivers assets without receiving payment, or vice versa. Canton Network extends this concept to a decentralized, multi-party environment where transactions can involve multiple participants across independent blockchains, while maintaining institutional-grade privacy and security.

:::tip
With atomic settlement, DvP effectively eliminates counterparty risk.
:::

### Two-Step Confirmation Process

Canton implements a two-phase confirmation process that ensures transaction integrity:

#### Phase 1: Participant Preparation

Each participant prepares a **confirmation request** that provides different views of the transaction. This allows parties to see only the sub-transactions relevant to them while maintaining privacy for other participants.

#### Phase 2: Sequencer Ordering

The confirmation request is submitted to a **sequencer** that orders all confirmation requests across the network. Critically, the sequencer performs only ordering and delivery functions — it cannot access or manipulate transaction content because message contents are encrypted.

---

### Privacy Through Sub-Transaction Isolation

One of Canton's key security features is **sub-transaction level privacy**.

Each party only receives and records the parts of a transaction that apply to them. In a DvP scenario, participants see only the sub-transactions where their parties are stakeholders.

:::tip
DvP prevents unnecessary information exposure and protects competitive strategies.
:::

This approach is essential for institutional use cases like treasury management and collateral trading, where competitors must not be able to front-run strategies or observe payment flows. It also prevents undesirable activity like arbitrage, MEV activity, or front-running.

### Encryption and Sequencing Architecture

The sequencer's message contents are encrypted and not visible to the sequencer itself. This design ensures the following:

- **Blind Ordering**: the Sequencer can order transactions without accessing their content;
- **Tamper Resistance**: the Sequencer cannot manipulate transaction details;
- **Privacy Preservation**: transaction data remains confidential during the ordering process.

:::tip
This enables private execution environments, making it suitable for institutional, bilateral, or agent-driven trading where confidentiality matters.
:::

Canton's Global Synchronizer uses a **2/3 majority Byzantine Fault Tolerant (BFT) consensus protocol** operated by independent Super Validators.

:::tip
This ensures fault tolerance, decentralization, and reliability.
:::

### No Pools

DvP in the Silvana Book removes the need for liquidity pools by enabling direct, atomic exchanges between buyers and sellers at agreed prices. Assets and payments settle simultaneously, eliminating slippage, impermanent loss, and pool-based pricing distortions. This order-based approach ensures fair price discovery and reduces risk for participants.

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
