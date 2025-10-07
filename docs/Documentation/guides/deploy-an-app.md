---
sidebar_position: 2
slug: /Documentation/guides/add-a-node
---

# How to Deploy an App

Let’s see how to deploy an app on an example of a simple addition program using the Silvana framework. The program showcases the integration between Sui Move contracts, TypeScript agents, and Mina zkApps.

## Prerequisites
Before starting, make sure you have these **tools** installed:

1. Node.js and npm

```bash script
node --version  # Should be v22 or higher
npm --version
```

2. Sui CLI

Follow the installation instructions at [Sui Documentation](https://docs.sui.io/guides/developer/getting-started/sui-install).

```bash script
sui --version
```

3. Docker

  - Download from [Docker Desktop](https://www.docker.com/products/docker-desktop/)
  - Ensure Docker is running before proceeding

```bash script
docker --version
```

4. Silvana CLI

```bash script
# Quick install
curl -sSL https://raw.githubusercontent.com/SilvanaOne/silvana/main/install.sh | bash

# Verify installation
silvana --version
```
