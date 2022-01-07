import express from "express";
import http from "http";
import socketIO from "socket.io";


const app = express();
const httpServer = http.createServer(app);

const io = new socketIO.Server(httpServer);

io.on('connection', (socket) => {
    console.log("New connection :" + socket.id)
})

httpServer.listen(3000, () => {
    console.log("rodando na porta : 3000")
    
})