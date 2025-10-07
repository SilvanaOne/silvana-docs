---
sidebar_position: 1
slug: /Documentation/guides/add-a-node
---

# How to Add a Node

## Silvana Node
Silvana’s infrastructure relies on a network of nodes assigned to perform the following functions:
- Coordination of proving and execution for Silvana apps;
- Ensuring Silvana OS interface availability via gPRC locally for running agents;
- Monitoring proof jobs, app operation, logs and metrics via OpenTelemetry gRPC push to New Relic.

## Hardware requirements
These are the recommended performance requirements for a Silvana node.

| **Minimal Hardware Requirements** | **Optimal Hardware Requirements** |
|----------------------------------|-----------------------------------|
| <ul><li>8 CPU</li><li>16 GB RAM</li><li>100 GB disk to hold docker images of the agents</li></ul> | <ul><li>16–32 CPU</li><li>32–64 GB RAM</li><li>200 GB disk to hold docker images of the agents</li></ul> |

## Installation Guide
There are two ways you can install a node: **Quick Installation** (recommended) and **Manual Installation**.

### Quick Installation
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

### Manual Installation
If you choose to install manually:

1. Go to the releases page.
2. Download the archive suitable for your platform:
 - `silvana-arm64-linux.tar.gz` for Linux ARM64;
 - `silvana-x86_64-linux.tar.gz` for Linux x86_64;
 - `silvana-macos-silicon.tar.gz` for macOS Apple Silicon.
3. Extract and install using these commands:

```bash script
# Download (replace with your platform's file)
curl -LO https://github.com/SilvanaOne/silvana/releases/latest/download/silvana-arm64-linux.tar.gz

# Extract
tar -xzf silvana-arm64-linux.tar.gz

# Install
sudo mv silvana /usr/local/bin/

# Make executable
sudo chmod +x /usr/local/bin/silvana

# Verify
silvana --version
```
4. To install a specific version instead of the latest one, run this command:
```bash script
curl -sSL https://raw.githubusercontent.com/SilvanaOne/silvana/main/install.sh | VERSION=v0.1.0 bash
```
5. After installation, verify the version works by doing this:

```bash script
silvana --version
silvana --help
```
### Uninstall
To remove Silvana, run this command:

```bash script
sudo rm /usr/local/bin/silvana
```

### Troubleshooting
Below are the most common issues you may encounter, along with the ways to address them.

#### Permission Denied
If you get a permission error, make sure the binary is executable:

```bash script
sudo chmod +x /usr/local/bin/silvana
```
#### Command Not Found
If `silvana` is not found after installation, add `/usr/local/bin` to your PATH:

```bash script
export PATH=$PATH:/usr/local/bin
echo 'export PATH=$PATH:/usr/local/bin' >> ~/.bashrc  # or ~/.zshrc
```
#### SSL/TLS Errors
If you encounter SSL errors during download, you can use the insecure flag (not recommended for production):

```bash script
curl -sSLk https://raw.githubusercontent.com/SilvanaOne/silvana/main/install.sh | bash
```
## Running Silvana Node

After installation, you’re ready to run the app.
To start a Silvana coordinator node, run this:

```bash script
silvana start
```

This command will:
- **Fetch configuration** from the Silvana RPC server for your network (devnet by default);
- **Auto-generate Sui keypair** if not present (saved to `.env`);
- **Request funds** automatically from the devnet faucet (10 SUI);
- **Initialize services** including job searcher, Docker processor, and gRPC server;
- **Launch monitoring** for jobs on the blockchain.

### First-Time Setup
If you’re running silvana start for the first time, follow these steps:

1. Enter this command:

```bash script
🔄 Fetching configuration for chain: devnet
✅ Successfully fetched 16 configuration items
🔑 SUI credentials not found, generating new keypair...
✅ Generated new Sui keypair:
   Address: 0x3f176926a223d730fea3998da1791f4c7517e73bf3472e233a316d8672275683
📝 Saved credentials to .env file
💰 Requesting funds from devnet faucet...
✅ Faucet request successful!
   Transaction: GGRwF1ybif9nRsjiJEneBguQppzKLkWVzxSZmToj1mLH
   🔗 Explorer: https://suiscan.xyz/devnet/tx/GGRwF1ybif9nRsjiJEneBguQppzKLkWVzxSZmToj1mLH

```


