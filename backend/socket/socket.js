import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://convoconnect-f8k1.onrender.com",
    methods: ["GET", "POST"],
  },
});

export const getRecieverSocketId = (recieverId) => {
  return userSocketMap[recieverId];
};

const userSocketMap = new Map();

io.on("connection", (socket) => {
  console.log("a user connected");

  const userId = socket.handshake.query.userId;

  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});

export { app, io, server };
