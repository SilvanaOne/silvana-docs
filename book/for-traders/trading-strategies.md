---
id: supported-trading-strategies
title: Supported Trading Strategies
sidebar_position: 2
---

# Supported Trading Strategies

## Trading Strategies

Silvana’s Book agentic execution arrangements allow for a number of trading strategies.

| Strategy | Execution Pattern | Maker or Taker | Typical Users | Primary Goal |
|---------|-------------------|---------------|---------------|--------------|
| Market Making | Limit orders are placed on both buy and sell sides. | Maker | • institutional traders (professional market makers);<br>• advanced retail traders with grid bots. | • earn bid–ask spread;<br>• provide liquidity. |
| Arbitrage | Liquidity takers execute fast cross-exchange or triangular trades. | Taker | • Institutions;<br>• HFT firms (low-latency);<br>• experienced retail traders. | Capture risk-free profit from price inefficiencies. |
| Scalping | Mostly taker market orders for rapid in-and-out trades (seconds to minutes). | Taker | • institutional HFTs;<br>• retail traders with fast APIs. | Accumulate many small profits from micro price movements. |
| Trend-Following | 1. Taker entries are made on trend signals with timed exits.<br>2. Assets are held for some time.<br>3. Assets are sold at the right time. | Taker | • retail traders;<br>• institutional traders (from simple bots to quant funds). | Capture sustained directional price moves. |
| Mean Reversion | Assets are sold or bought on trend reversal signals, exploiting strong market fluctuations caused by a change in market sentiment (e.g. panic). | Both | • retail traders (mostly bots);<br>• arbitragers;<br>• institutional traders. | Gain profit from price reverting back to its mean. |
| Grid Trading | A grid of standing limit buy or sell orders are submitted across a price range. | Maker | Primarily retail traders using automated bots. | Harvest volatility in range-bound markets. |
| Protfolio Rebalancing | Taker – periodic or threshold-based market orders | Maker | Both retail investors and institutional funds | Maintain target portfolio allocation and manage risk |
| Dollar-Cost Averaging | Scheduled or trigger-based market buy orders | Taker | Mostly retail long-term investors | Smooth entry price and build long-term positions |


