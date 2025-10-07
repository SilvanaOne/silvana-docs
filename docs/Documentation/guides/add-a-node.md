---
sidebar_position: 1
slug: /Documentation/guides/add-a-node
---

# Silvana Node
Silvana’s infrastructure relies on a network of nodes assigned to perform the following functions:
- Coordination of proving and execution for Silvana apps;
- Ensuring Silvana OS interface availability via gPRC locally for running agents;
- Monitoring proof jobs, app operation, logs and metrics via OpenTelemetry gRPC push to New Relic.

# Hardware requirements
These are the recommended performance requirements for a Silvana node.

| **Minimal Hardware Requirements** | **Optimal Hardware Requirements** |
|----------------------------------|-----------------------------------|
| <ul><li>8 CPU</li><li>16 GB RAM</li><li>100 GB disk to hold docker images of the agents</li></ul> | <ul><li>16–32 CPU</li><li>32–64 GB RAM</li><li>200 GB disk to hold docker images of the agents</li></ul> |

# Installation Guide
There are two ways you can install a node: **Quick Installation** (recommended) and **Manual Installation**.

## Quick Installation
Install the latest version of Silvana with a single command:

```bash script
curl -sSL https://raw.githubusercontent.com/SilvanaOne/silvana/main/install.sh | bash
```
Or with wget:

```bash script
wget -qO- https://raw.githubusercontent.com/SilvanaOne/silvana/main/install.sh | bash
```
This script will:

- Automatically detect your OS (Linux or macOS) and architecture (ARM64 or x86_64);
- Download the appropriate binary from the latest GitHub release;
- Install it to `/usr/local/bin/silvana;`
- Verify the installation.

Supported Platforms:
- Linux ARM64 (aarch64);
- Linux x86_64 (amd64);
- macOS Apple Silicon (M1/M2/M3/M4).

