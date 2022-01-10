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

export { io, httpServer }