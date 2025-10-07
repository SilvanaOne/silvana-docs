---
sidebar_position: 2
slug: /Documentation/guides/deploy-ann-app
---

# How to Deploy an App

Let’s see how to deploy an app on an example of a simple addition program using the Silvana framework. The program showcases the integration between Sui Move contracts, TypeScript agents, and Mina zkApps.

## Prerequisites
Before starting, make sure you have these **tools** installed:

1. Node.js and npm

```javascript
node --version  # Should be v22 or higher
npm --version
```

2. Sui CLI

Follow the installation instructions at [Sui Documentation](https://docs.sui.io/guides/developer/getting-started/sui-install).

```javascript
sui --version
```

3. Docker

  - Download from [Docker Desktop](https://www.docker.com/products/docker-desktop/)
  - Ensure Docker is running before proceeding

```javascript
docker --version
```

4. Silvana CLI

```javascript
# Quick install
curl -sSL https://raw.githubusercontent.com/SilvanaOne/silvana/main/install.sh | bash

# Verify installation
silvana --version
```
## Getting Started

### Step 1: Create a New Project
Use the Silvana CLI to create a new project from the template:

```javascript
silvana new myprogram
```
This command will:
- Download the project template;
- Generate Sui and Mina keypairs for both user and Coordinator;
- Automatically fund all accounts from testnets;
- Fetch devnet configuration;
- Create a Silvana registry on-chain;
- Store the agent's private key in secure storage;
- Generate environment files with all necessary configuration.

### Step 2: Navigate to Your Project
Run this command:

```javascript
cd myprogram
```
Your project structure will look like this:

```javascript

 📁 Project structure:
    myprogram/
    ├── agent/     # TypeScript agent implementation
    |     src/     # Agent source code
    |     .env     # Agent configuration (auto-generated)
    |     .env.app # App-specific configuration (empty initially)
    ├── move/      # Move smart contracts
    └── silvana/   # Silvana Coordinator
         .env      # Coordinator configuration (auto-generated)
```

### Step 3: Build and Deploy Move Contract
Navigate to the move directory and deploy your smart contract:

```javascript
cd move

# Switch to devnet
sui client switch --env devnet

# Check your addresses
sui client addresses

# Request funds if needed
sui client faucet

# Check balance
sui client balance

# Build the Move contract
sui move build

# Publish the contract
sui client publish
```

After publishing, you'll see output containing the PackageID, like:

```javascript
PackageID: 0xf238cb13361d361c6324e069b99a2ebccbd69c3ac703b25c2f0ee41e7924736b
```
:::warning Warning
Copy this PackageID and add it to your `agent/.env` file: `APP_PACKAGE_ID=0xf238cb13361d361c6324e069b99a2ebccbd69c3ac703b25c2f0ee41e7924736b`
:::

### Step 4: Build and Compile the Agent
Navigate to the agent directory and set up the TypeScript agent:

```javascript
cd agent

# Install dependencies
npm install

# Build the TypeScript code
npm run build

# Compile zkApp circuits (run twice to generate full prover keys)
npm run compile
npm run compile
```
:::warning Warning
The `npm run compile` command needs to be run twice to create a complete set of zk prover keys for the Mina zkApp.
:::

### Step 5: Verify Account Funding
The setup process automatically funded your accounts, but you can verify the balances:

```javascript
# Get the Mina address from agent/.env (MINA_PUBLIC_KEY)
silvana balance mina --network mina:devnet --address <YOUR_MINA_PUBLIC_KEY>
```
You should see positive balances. Otherwise, you can manually request funds using `silvana faucet` command

### Step 6: Deploy the Application
Deploy your application to both Mina and Sui blockchains:

```javascript
# From the agent directory
npm run deploy
```

This command will:
- Deploy the Mina zkApp contract;
- Create the application on the Sui blockchain;
- Register the app in the Silvana registry;
- Generate the app instance configuration.

You should see an output of this type:

```javascript
App initialized successfully
✅ App created successfully!
📦 App ID: 0x40deec126c7f08ce85135381646759533e6c7e1c5193674e4e71091052d18822
📦 Registry: 0x5124fbb1d17eccccd42128233fbfbfc0657a5065aa878536f724aa1fe8d6f619
💾 Configuration saved to .env.app
App instance ID: 0xaacf350ac6ae669ebf9804b455b0bc75a71f28a34bdc48d87ca78f1f90ba0f3b
Mina contract address: B62qoRvnY827gKNPy6yTWM9iwQJ9JGXu7MPDU9GCzSUpccELfThGRCE
Mina admin address: B62qoiTzbVwoQorP4ys8YKtP5kYWk46BRzeoxwb6xSnx2kLzZJQrEnG
```
The deployment will automatically save the configuration to `.env.app` file with:
- **App ID**: the unique identifier for your application;
- **App instance ID**: the specific instance of your deployed app;
- **Mina contract address**: the deployed zkApp address on Mina;
- **Registry information**: connection to the Silvana registry.

### Step 7: Start the Silvana Coordinator
Open a new terminal window and navigate to the silvana folder:

```javascript
cd silvana
silvana start
```

:::warning Warning
To ensure proper process management, use a regular system terminal for this step, not an integrated terminal in your IDE.
:::

The Coordinator will:
- Connect to the Sui blockchain;
- Monitor for incoming jobs;
- Coordinate execution between the agent and blockchain;
- Handle settlement and verification.

You should see the Coordinator starting up and waiting for jobs. Keep this terminal running. The Coordinator performs the following initialization steps:

1. **Configuration Loading**: fetches devnet configuration from the RPC server and injects environment variables.
2. **Sui Connection**: connects to the Sui blockchain RPC endpoint.
3. **Balance Check**: verifies sufficient SUI balance for operations.
4. **Gas Coin Pool**: initializes a pool of gas coins by splitting large coins for better transaction performance.
5. **Service Startup**: starts multiple background services:
   - **Job Searcher**: monitors for new jobs on the blockchain;
   - **Multicall Processor**: batches multiple operations for efficiency;
   - **Docker Buffer Processor**: manages Docker container execution;
   - **Event Monitor**: watches blockchain events;
   - **gRPC Server**: provides API for agent communication;
   - **Periodic Tasks**: runs reconciliation, block creation, and proof analysis.

Once running, the Coordinator will:

- Detect new jobs created on the blockchain;
- Launch Docker containers to execute agent code;
- Process job results and update blockchain state;
- andle proof generation and settlement.

You'll see logs like:

```javascript
📝 JobCreated: seq=4, dev=AddDeveloper, agent=AddAgent/prove, app_method=add
🐳 Starting Docker container for buffered job 1: AddDeveloper/AddAgent/prove
✅ Job 1 started and reserved for Docker session
```

### Step 8: Send Test Transactions
With the Coordinator running, open another terminal and navigate to the agent directory to send test transactions:

```javascript
cd agent
npm run batch
```
This command runs a batch test that sends multiple transactions to your deployed application. You'll see output like:

```javascript
> add@0.1.0 batch
> npm run test test/batch.test.ts

[2025-09-09T23:02:48.875Z] Batch iteration 1 - Max delay: 13.718s - Total TX: 0 - TPS: 0
wait sui tx: 108.765ms
wait sui tx: 113.928ms
wait sui tx: 3.267s
...
[2025-09-09T23:04:59.263Z] Batch iteration 2 - Max delay: 20.926s - Total TX: 10 - TPS: 0.077
```
The batch test:
- Sends multiple addition requests to the Sui blockchain;
- Each transaction creates a job that the Coordinator detects;
- The Coordinator launches Docker containers to process each job;
- Results are computed, proven with zkSNARKs, and settled on-chain.

:::tip Success
**Congratulations!** Your first Silvana app is now up and running!
:::

You've successfully:
- ✅ Created a new Silvana project with the automated setup;
- ✅ Deployed a Move smart contract on Sui;
- ✅ Built and compiled a TypeScript agent with zkSNARK circuits;
- ✅ Deployed a Mina zkApp for proof verification;
- ✅ Started the Silvana Coordinator to orchestrate execution;
- ✅ Sent transactions that trigger distributed computation.

Your application is now processing addition operations across multiple blockchains:
- **Sui** handles job creation, proving orchestration and optimistic state calculations;
- **Docker containers** execute the computation securely;
- **Mina** verifies zero-knowledge proofs of correct execution;
- **Silvana** coordinates the entire workflow.

## Running Agent on Silvana Devnet
Instead of running your own Coordinator, you can deploy your application to the Silvana devnet, where it will be processed by the shared Silvana infrastructure.

### Option 1: Deploy to Shared Silvana Devnet
To use the shared Silvana devnet registry:

1. **Get the devnet registry ID**:

```javascript
silvana config
```
Look for:

```javascript
SILVANA_REGISTRY = 0x916a3b24de8165fb6fb25d060ec82b50683dc9e9cebf0dfae559f943ee32adb2
SILVANA_REGISTRY_PACKAGE = 0x32f8ad21df94c28401912c8ffebcc3bd186f5bf7da0995057a63755005937025
```


2. **Update your agent configuration** to use the shared registry:

```javascript
# In agent/.env, update:
SILVANA_REGISTRY=0x916a3b24de8165fb6fb25d060ec82b50683dc9e9cebf0dfae559f943ee32adb2
SILVANA_REGISTRY_PACKAGE=0x32f8ad21df94c28401912c8ffebcc3bd186f5bf7da0995057a63755005937025
```

3. **Register your app** in the shared registry using Silvana registry commands:

```javascript
silvana registry --help
```

Your jobs will now be processed by the Silvana devnet infrastructure - no need to run your own Coordinator!

### Option 2: Join as a Devnet Operator
To contribute computing power to the Silvana devnet:

1. **Configure your Coordinator** to use the shared registry:

```javascript
# In silvana/.env, set:
SILVANA_REGISTRY=0x916a3b24de8165fb6fb25d060ec82b50683dc9e9cebf0dfae559f943ee32adb2
SILVANA_REGISTRY_PACKAGE=0x32f8ad21df94c28401912c8ffebcc3bd186f5bf7da0995057a63755005937025
```
2. **Start your Coordinator**:

```javascript
cd silvana
silvana start
```
Your Coordinator will now process jobs from all applications registered in the shared devnet registry.

## Amending the Code
When you want to modify the application logic and deploy your own version:

### Step 1: Modify the Circuit Logic
Edit `agent/src/circuit.ts` to implement your custom computation logic. This file contains the zkSNARK circuit that defines what computation will be proven and verified.

### Step 2: Configure Docker Hub
Before building and pushing your Docker image, configure your Docker Hub credentials in `agent/.env`:

```javascript
# Edit agent/.env and add your Docker Hub credentials:
DOCKER_USERNAME=your-dockerhub-username
DOCKER_PASSWORD=your-dockerhub-password
IMAGE_NAME=your-image-name (like 'add')
DOCKER_ACCESS_TOKEN=your-docker-access-token
```
To get a Docker Access Token, follow these steps:
1. Log in to [Docker Hub](https://hub.docker.com/).
2. Go to Account Settings → Security.
3. Create a New Access Token.
4. Copy the token to `DOCKER_ACCESS_TOKEN`.

### Step 3: Build and Deploy
After making your changes, rebuild and deploy your agent:

```javascript
cd agent

# Build the TypeScript code
npm run build

# Compile the zkApp circuits (run twice for complete prover keys)
npm run compile
npm run compile

# Build and push Docker image with your agent and prover keys
npm run docker
```

This process:
- **Builds** your modified TypeScript code;
- **Compiles** the zkSNARK circuits to generate prover/verifier keys;
- **Creates** a Docker image containing your agent code and prover keys;
- **Pushes** the image to Docker Hub under your account.

### Step 4: Update Your App Configuration
After pushing your new Docker image, update your app to use it:

1. Note your new Docker image URL: `docker.io/your-username/your-image-name:latest`.
2. Update your app configuration to reference this new image.
3. Redeploy your app with `npm run deploy`.

:::warning Warning
The compiled **prover keys** are large (can be several GB) and are included in the Docker image. Therefore, the docker image can be large, too.
:::



:::warning Warning
You should use a **public Docker repository** to ensure that the Coordinator will be able to pull the image.
:::

## Troubleshooting
In the table below, see typical issues you may encounter and how you can handle them:

| **Issue** | **How to Fix** |
|------------|----------------|
| The Coordinator refuses to detect jobs | Ensure the Coordinator is running and connected to the correct **SILVANA_REGISTRY_PACKAGE** and **SILVANA_REGISTRY** on Sui Devnet. |
| Docker error | Verify Docker Desktop is running and you're logged in to Docker Hub. |
| Insufficient balance | Run `silvana faucet` commands to request more tokens. |
| Transaction failures | Check the explorer for detailed error messages and look at the Coordinator logs in the terminal. |
| Debugging | Use `silvana instance` command to show App Instance state, `silvana block`, `silvana proofs` commands to show block information and aggregated proof production details for the block, and `silvana jobs` and `silvana job` commands to show the details about proving, merging and settlement jobs being run by Coordinators. |
| Manual transactions | Use `silvana transaction` to manually execute transactions for your App Instance. |

##  Silvana CLI
Run `silvana help` to see all available commands:

```javascript
Usage: silvana [OPTIONS] <COMMAND>

Commands:
  start        Start the Silvana node
  new          Create a new Silvana project from template
  instance     Fetch and display an app instance by ID
  object       Fetch and display a raw Sui object by ID
  block        Fetch and display a block by number
  proofs       Fetch and display proof calculations for a block
  job          Fetch and display a job by sequence number
  jobs         Fetch and display all jobs from an app instance
  transaction  Execute blockchain transactions
  keypair      Generate keypairs for different blockchains
  balance      Check balance
  split        Split coins to maintain gas coin pool
  network      Display network information
  config       Fetch and display configuration from RPC server
  faucet       Request tokens from the faucet
  avs          AVS Operator commands for managing EigenLayer AVS operations
  registry     Registry management commands
  secrets      Secret storage commands
  help         Print this message or the help of the given subcommand(s)

Options:
      --chain <CHAIN>  Override the blockchain network (devnet, testnet, or mainnet) [env: SUI_CHAIN=devnet]
  -h, --help           Print help
```

