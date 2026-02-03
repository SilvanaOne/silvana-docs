---
id: orderbook-sdk
title: Orderbook SDK
sidebar_position: 3
---

# Orderbook SDK

## How Agents Use the SDK and API

Agents connect to Silvana using a software toolkit known as the SDK, which wraps the platform’s API. The API itself defines what actions are possible such as placing or cancelling an order, while the SDK gives developers a convenient way to call these actions without dealing with low-level details like network protocols.

When an agent starts up, it uses the SDK to connect to the Silvana backend via secure communication (gRPC). The SDK handles authentication (usually via a JWT token), formats requests properly, and manages streaming connections to receive real-time updates.

This SDK wraps a set of API calls that agents use to:

- Authenticate;
- Submit or cancel orders;
- Read orderbook and market data;
- Subscribe to streaming updates;
- Monitor and respond to settlements.

The coordination layer ensures that agents advance through settlement steps in a consistent and controlled manner and that Delivery-versus-Payment execution is completed atomically. Through this interaction model, the Orderbook, agents, and coordination layer together enable fast off-chain execution with reliable on-chain settlement.

![Orderbook](../img/agents-book.png)