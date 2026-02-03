---
id: intro
title: Meet Silvana Book
sidebar_position: 1
---

# Meet Silvana Book

## Overview
**Silvana Book** is a private order book designed for high-performance trading on **Canton**, combining ultra-fast off-chain order matching with secure, atomic on-chain settlement. It enables market participants to trade with full asset control, strong privacy guarantees, and deterministic execution, without exposing orders or strategies to the public network.

## Basic Principles and Advantages
### Privacy by Default
All order matching runs in a private environment. Trading activity, balances, and strategies are not visible to the public, preventing information leakage and external interference Silvana Book. This is particularly critical for enterprises and big companies willing to keep their operations a secret to avoid frontrunning, market fluctiations or third-party arbitrage or MEV-seekers' attempts.

### Ultimate Security
By leveraging Canton’s DvP execution flow, Silvana Book ensures secure trading. Both parties sign their part of the transaction, and assets move only when all conditions are met. Otherwise, the transaction rolls back, and the parties retain control of their assets.

### Full Asset Control
No assets are escrowed during matching. If any party fails to meet settlement conditions, the transaction is rolled back, and balances remain unchanged, ensuring non-custodial safety Silvana Book.

### No Slippage
Orders are settled at the intended price. Since matching is private and isolated from public order flow, there is no market impact or external price pressure, Silvana Book.

### Ultra-Fast Agentic Execution
Bid and ask orders are matched off-chain using an optimistic state, allowing near-instant execution ( < 1s), while final settlement is confirmed later on the Canton Silvana Book. All operations are carried out by autonomous off-chain agents that automate the orderflow.

## Solution and Design
The system separates **execution** from **settlement**:

- **Order matching** happens **off-chain** inside a private matching engine.

- Bids and Asks match automatically via agents. Upon matching, an optimistic state is generated. From now on, the transaction is deemed irreversible.

- **Settlement** follows up on-chain on Canton, using a **Delivery-versus-Payment (DVP)** flow, according to which assets are swapped simultaneously when both parties fulfil their obligations.

![Meet Silvana Book](./img/orderbook.png)

:::tip Note
Assets never leave a party’s wallet, which effectively means parties retain directcontrol of their assets until a transaction is finalized.
::: 

This design achieves sub-second execution latency while preserving on-chain security and finality.

:::tip Note
In case any party should fail to fulfil contractual obligations, such transaction is not finalized and rolls back.
::: 