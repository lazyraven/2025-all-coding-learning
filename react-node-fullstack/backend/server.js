const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const Message = require("./models/Message");

connectDB();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", async (socket) => {
  console.log("User connected:", socket.id);

  // Send chat history when user joins
  const history = await Message.find().sort({ createdAt: 1 }).limit(50);
  socket.emit("chat-history", history);

  socket.on("chat-message", async (data) => {
    const saved = await Message.create(data);

    io.emit("chat-message", saved); // broadcast DB version
  });

  socket.on("chat-message", (msg) => {
    io.emit("chat-message", msg); // broadcast to all
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(3000, () => console.log("Server running"));
