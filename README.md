![Screenshot from 2024-01-02 20-06-22](https://github.com/aryans1319/skat/assets/72180855/6cf1e979-9bbc-4115-9489-030ff468d14f)
# Skat - A scalable real-time chat application using Redis PubSub Architecture along with Kafka for scaling web-sockets
Skat is a powerful real-time chat application built for seamless communication among multiple users concurrently. Leveraging Socket.IO and Redis, this project enables instant messaging across various servers, ensuring a smooth and responsive chatting experience.

## How Skat Works:
Skat employs Socket.IO to manage WebSocket connections, enabling real-time communication between users. The integration with Redis establishes a PubSub architecture, providing a scalable and efficient message distribution system. This setup allows users from various servers to exchange messages instantly, creating a unified chatting experience.

## Redis Integration and Benefits

### Scalability with Redis

- **Handling a Huge User Load:** Redis, utilizing its PubSub architecture, efficiently distributes messages among numerous users. When a large user base connects to a single socket server, Redis manages and disseminates messages seamlessly, preventing server overload.

### Inter-Server Communication

- **Enabling Seamless Communication Across Servers:** Redis acts as a central communication hub, facilitating message sharing among different socket servers. This enables users connected to various servers to engage in real-time conversations, providing a unified chatting experience.

### Solving Scalability Challenges

- **Avoiding Overloaded Servers:** In the absence of Redis, a single socket server might struggle to manage a high volume of connected users. Redis alleviates this challenge by handling message distribution, ensuring smooth communication even under heavy user traffic.

### Redis' Role in Seamless Communication

Redis serves as a vital messaging broker, enabling effective communication among multiple socket servers. It ensures efficient message distribution among servers, allowing users from different server instances to exchange messages instantly. This seamless cross-server communication is pivotal in maintaining a consistent and responsive chatting experience, made possible by Redis' PubSub architecture.

## Kafka Integration Benefits

The integration of Kafka within the messaging system serves several crucial purposes:

### Efficient Message Handling

Kafka serves as a robust message broker, efficiently managing the flow of messages within the application. This architecture enables the handling of a massive volume of messages without overwhelming the database with repeated write operations.

### Load Balancing and Database Operations

Utilizing Kafka offers the ability to distribute the message load effectively. Instead of directly writing every message to the database, Kafka enables batching and optimization of the data flow. This approach significantly reduces the strain on the database system, promoting efficiency and scalability.

### Fault Tolerance and Resilience

Kafka's architecture ensures fault tolerance, particularly in scenarios involving database-related issues or failures during message persistence. The consumer's error-handling mechanism provides resilience by pausing message consumption temporarily before resuming. This allows the system to gracefully recover from potential failures, ensuring the overall reliability of the application.

## Technologies Used

- **Node.js & TypeScript:** Powering the backend with robustness and enhanced code readability.
- **Redis:** Employed for efficient real-time message distribution among users.
- **Kafka:** Kafka has been integrated into the system to enhance message handling, offering the ability to manage large volumes of messages efficiently. This integration optimizes the flow of data, preventing overwhelming write operations to the database and providing a high-throughput distributed messaging system.
- **Prisma with PostgreSQL:** The addition of Prisma, combined with PostgreSQL, ensures reliable and persistent data storage. Prisma's seamless integration allows for efficient interaction with the PostgreSQL database, facilitating the storage and retrieval of messages with ease.
- **Aiven Cloud Service:** Hosting the Redis instance, Kafka and PostgreSQL services.
- **TurboRepo:** Scaling a monorepo setup for streamlined code management across modules/services.

## Screenshots
<img src="https://github.com/aryans1319/skat/assets/72180855/dd236b3c-d451-4321-ae1b-a28cab524053" alt="Screenshot 2" width="750">
<img src="https://github.com/aryans1319/skat/assets/72180855/4b342afa-33b0-4997-8c4a-9383a54a095a" alt="Screenshot 3" width="750">
<img src="https://github.com/aryans1319/skat/assets/72180855/0ef070ca-68a8-48a7-8f72-d55b09e81c40" alt="Kafka" width="750">

