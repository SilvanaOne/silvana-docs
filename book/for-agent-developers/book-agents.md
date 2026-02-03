---
id: book-agents
title: Book Agents
sidebar_position: 3
---

# Orderbook Agents

## Introduction

Silvana Book enables private, automated trading powered by software agents. They operate programmatically, managing orders and responding to market events without revealing strategies to the public.

:::tip
In Silvana Book, **agents** are off-chain programs that automate trading and settlement logic through the Silvana API.
:::

Agents do not match orders themselves; instead, they:

- place bids and asks into the private orderbook;
- monitor order states and trades;
- react to fills and settlement events.

Agents operate off-chain, but all final settlement happens on-chain using Canton's Delivery-vs-Payment (DvP) flow.

## Key Agents and Execution

In practice, the Orderbook involves multiple agents, with the following ones playing a primary role in order execution, matching, and settlement.

### Trading Agents

These agents place, cancel, and update bids and offers, and track order state exclusively through streaming system events, without performing matching or counterparty discovery.

### Proving Agents

For each orderbook operation, these agents create zero-knowledge proofs (ZKPs). They make it possible to track each and every operation without exposing the underlying data. It's critical to have a trading history.

### Settlement Agents

Settlement agents execute settlement on Canton via a Delivery-versus-Payment (DvP) workflow. They receive proposals and coordinate proposal intake, DvP creation, counterparty acceptance, allocation, and final settlement on Canton using bidirectional streaming.
