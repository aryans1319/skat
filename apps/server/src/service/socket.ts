import { Server } from "socket.io"
import Redis from "ioredis"

const publisher = new Redis({
    host: 'redis-3b59c91-skat.a.aivencloud.com',
    port: 28212,
    username: 'default',
    password: 'AVNS_ut9UROKemk5EURGj2T_'
});

const subscriber = new Redis({
    host: 'redis-3b59c91-skat.a.aivencloud.com',
    port: 28212,
    username: 'default',
    password: 'AVNS_ut9UROKemk5EURGj2T_'
});

class SocketService {
    private _io: Server;

    constructor(){
        console.log("Socket Server init");
        this._io = new Server({
            cors: {
                allowedHeaders: ["*"],
                origin: "*",
            }
        });
    }
    
    public socketListeners(){
        const io = this.io;
        console.log("Init the socket listeners");
        // when we connect to the socket
        io.on("connect", (socket) => {
            console.log("New socket connection", socket.id);
            // when an event is emitted on the socket
            socket.on("event: message", async({ message } : { message: String}) => {
                console.log("New Message Received on server", message);
                // now we need to publish the received message to redis
                await publisher.publish("MESSAGES", JSON.stringify({ message }));
            });
        });
    }

    get io(){
        return this._io;
    }
}

export default SocketService;