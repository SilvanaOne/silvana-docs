---
sidebar_position: 4
---

# Data Availability Layer

The **Data Availability (DA) Layer** is a **storage** that keeps recorded data in **data blobs** and provides proof of the availability and state mutation of stored objects - **provable records**. At any time, a user can read the stored objects to see their current state. The object's state can be mutated as a result of running a transaction, and an object can be deleted from the DA. As each of these transactions runs, the proof is generated and events are emitted. Silvana is open to integrating with existing or emerging DA layers.