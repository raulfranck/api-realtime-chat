import express from "express";
import http from "http";
import socketIO from "socket.io";

const app = express();
const httpServer = http.createServer(app);

const io = new socketIO.Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
    console.log("New connection :" + socket.id)
    socket.emit("teste", "novo dado")
})

io.on('new-message', (message) => {
    io.emit(message);
});

httpServer.listen(3000, () => {
    console.log("rodando na porta : 3000")
    
})