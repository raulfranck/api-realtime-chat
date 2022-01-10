import { io } from "./http";

io.on("connection", (socket) => {
    console.log(`Usuario: ${socket.id}, conectado!`)
})