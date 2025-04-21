---
sidebar_position: 4
---

# ZKP Scalability Dilemma

Silvana needs high scalability to ensure efficient operations and fast transaction execution. However, it uses [**zero-knowledge proofs (ZKPs)**](/Documentation/key-concepts/zk-proofs) when handling private data. Zero-knowledge (ZK) blockchains offer significant scalability benefits by aggregating multiple transactions into a single proof, thereby reducing on-chain data and enhancing throughput. ​However, they face several challenges:​

* **Computational Overhead**: generating and verifying ZK proofs, especially in systems like [**zk-SNARKs**](/Documentation/glossary#zk-snark) and [**zk-STARKs**](/Documentation/glossary#zk-stark), requires substantial computational resources, which can slow down transaction processing and increase costs.
* **Complex Development**: implementing ZK technologies demands specialized cryptographic expertise, making development more complex and potentially hindering widespread adoption. ​
* **Data Availability Concerns**: ensuring that all necessary data remains accessible for verification is critical; if data becomes unavailable, it can compromise the integrity and security of the blockchain. ​

How do we combine high transaction speed with the data security of zero-knowledge proofs?

Addressing this dilemma is essential for ZK blockchains to achieve their full potential in scalability and privacy.