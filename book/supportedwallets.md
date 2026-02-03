---
id: supportedwallets
title: Supported Wallets
sidebar_position: 5
---
# Supported Wallets

## Delivery-versus-Payment (DvP)

Silvana Book integrates with non-custodial Canton wallets, allowing users to retain full control over their assets and signing keys while Silvana coordinates execution and settlement. Wallet support evolves with the Canton ecosystem, and additional wallets will be added over time.

All supported wallets enable holding and transferring Canton assets. Some support advanced features like **Delivery-versus-Payment (DvP)**, while others currently focus on simpler transfers and are expected to expand functionality later.

## Distributed Financial Network Services

Silvana Book supports **DFNS (Distributed Financial Network Services)**, a cloud-based infrastructure for cryptographic key management built on **Multi-Party Computation (MPC)** technology. It has the following features:

- **MPC keys** – private keys never exist in a single location.
- **WebAuthn / FIDO2** – passkey-based authentication, including biometrics and PINs.
- **EdDSA** signature scheme with the **ed25519** curve is used.
- **Canton integration** – we providededicated support for multihash signing for the Canton Network.

## Supported Wallets

Below is a list of wallets we support:

| Wallet | Integrated with Silvana Book | DvP |
|-------|------------------------------|-----|
| Loop Wallet | ✅ | ✅ |
| Console Wallet | ❌ | ❌ |
| Supa Wallet | ❌ | ❌ |
| Zoro Wallet | ❌ | ❌ |
| Nightly Wallet | ❌ | ❌ |
| Cantor8 Wallet | ❌ | ❌ |
| Bron Wallet | ❌ | ❌ |
| Send Wallet | ❌ | ❌ |
| Finoa Wallet | ❌ | ❌ |

While DvP is a native capability of the Canton network, only a small number of wallets currently expose this functionality to users. Supporting DvP requires wallets to handle multi-step interactions, offer and acceptance flows, and clear user confirmations. This is more complex than traditional single-step blockchain transfers and enables:

- atomic settlement between independent parties;
- reduced counterparty risk;
- strong guarantees around trade finality.

> Wallets without native DvP support can still be used with Silvana Book for holding assets and participating in trading, but the settlement experience may rely on simplified or indirect flows rather than direct DvP interactions at the wallet level.

:::tip Note
Wallets without native DvP support can still be used with Silvana Book for holding assets and participating in trading, but the settlement experience may rely on simplified or indirect flows rather than direct DvP interactions at the wallet level.
::: 

Our goal is not only to integrate existing wallets, but to grow an ecosystem where wallets, agents, and execution systems can operate together seamlessly.

**Join us for safer and more secure trading!**

