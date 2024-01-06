import { Server } from "socket.io"
import Redis from "ioredis"
import prismaClient from "./prisma";

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
        // subscribing to the message channel so that 
        // so that all client connected to the server can receive the messages
        subscriber.subscribe("MESSAGES")
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

        // if redis rec msg then we check the channel and 
        // forward all the messages as it is to the client
        subscriber.on('message', async (channel, message) => {
            if(channel === 'MESSAGES'){
                console.log("new message from redis", message);
                io.emit("message", message)
                // Store in DB
                await prismaClient.message.create({
                    data: {
                        text: message,
                    },
                })
            }
        })
    }

    get io(){
        return this._io;
    }
}

export default SocketService;