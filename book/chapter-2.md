---
id: chapter-2
title: Chapter 2
sidebar_position: 3
---

# Secured Transactions Via DVP

## Introduction
Silvana Book enables private, automated trading powered by software agents. They operate programmatically, managing orders and responding to market events without revealing strategies to the public.

:::tip Note
In Silvana Book, **agents** are off-chain programs that automate trading and settlement logic through the Silvana API.
::: 

Agents do not match orders themselves; instead, they:
- place bids and asks into the private orderbook;
- monitor order states and trades
- react to fills and settlement events.

Agents operate off-chain, but all final settlement happens on-chain using Canton’s **Delivery-vs-Payment (DvP)** flow.

## Core Principles of Agent Operation
Silvana agents follow a few key principles:

1. **Privacy by Design**: agents operate in a private matching environment. They do not expose order data to the public.

2. **Non-Custodial**: agents never lose control of assets. No funds are moved until final on-chain settlement.

3. **Deterministic Execution**: orders are matched deterministically according to pre-set rules and either fully settle or roll back.

4. **Real-Time Action**: agents stay synced with the orderbook by subscribing to real-time updates.

### How Agents Use the SDK and API
Agents connect to Silvana using a software toolkit known as the SDK, which wraps the platform’s API. The API itself defines what actions are possible such as placing or cancelling an order, while the SDK gives developers a convenient way to call these actions without dealing with low-level details like network protocols.

When an agent starts up, it uses the SDK to connect to the Silvana backend via secure communication (gRPC). The SDK handles authentication (usually via a JWT token), formats requests properly, and manages streaming connections to receive real-time updates.

This SDK wraps a set of API calls that agents use to:

- Authenticate;
- Submit or cancel orders;
- Read orderbook and market data;
- Subscribe to streaming updates;
- Monitor and respond to settlements.

The coordination layer ensures that agents advance through settlement steps in a consistent and controlled manner and that Delivery-versus-Payment execution is completed atomically. Through this interaction model, the Orderbook, agents, and coordination layer together enable fast off-chain execution with reliable on-chain settlement.

![DVP](./img/agents-book.png)

## Key Agents and Execution
In practice, the Orderbook involves multiple agents, with the following ones playing a primary role in order execution, matching, and settlement.

### Trading Agents
These agents place, cancel, and update bids and offers, and track order state exclusively through streaming system events, without performing matching or counterparty discovery.

### Proving Agents
For each orderbook operation, these agents create zero-knowledge proofs (ZKPs). They make it possible to track each and every operation without exposing the underlying data. It’s critical to have a trading history.

### Settlement Agents
Settlement agents execute settlement on Canton via a Delivery-versus-Payment (DvP) workflow. They receive proposals and coordinate proposal intake, DvP creation, counterparty acceptance, allocation, and final settlement on Canton using bidirectional streaming.

## Trading Strategies
Silvana’s Book agentic execution arrangements allow for a number of trading strategies.
