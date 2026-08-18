import express from "express";

import {createServer} from "http";

import cors from "cors";

import {Server} from "socket.io";


const app = express();


const server = createServer(app);

const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET", "POST"],
    }

})

io.on("connection", (socket)=>{
    console.log("New Client Connected");

    socket.on("chat message",(message)=>{
        console.log(message);
        socket.emit("message",message);
    })

    socket.on("disconnect",()=>{
        console.log("Client Disconnected");
    })

})



server.listen(3000,()=>{
    console.log("Server Running one 3000")
})