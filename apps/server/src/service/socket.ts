import { Server } from "socket.io"

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
            });
        });
    }

    get io(){
        return this._io;
    }
}

export default SocketService;