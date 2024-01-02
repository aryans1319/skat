![Screenshot from 2024-01-02 20-06-22](https://github.com/aryans1319/skat/assets/72180855/6cf1e979-9bbc-4115-9489-030ff468d14f)
# Skat - A scalable real-time chat application using Redis PubSub Architecture for scaling web-sockets
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

## Technologies Used

- **Node.js & TypeScript:** Powering the backend with robustness and enhanced code readability.
- **Redis:** Employed for efficient real-time message distribution among users.
- **Aiven Cloud Service:** Hosting the Redis instance for reliability and scalability.
- **TurboRepo:** Scaling a monorepo setup for streamlined code management across modules/services.

