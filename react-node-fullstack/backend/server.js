const express = require("express");
const http = require("http");

const { Server } = require("socket.io");
const connectDB = require("./config/db");
const Message = require("./models/Message");
// JWT socket middleware
const jwt = require("jsonwebtoken");
const SECRET = "supersecretkey";
// import cors from "cors";
const cors = require("cors");
// import express from "express";
// import cors from "cors";

connectDB();

const app = express();
const server = http.createServer(app);
// jwt
app.use(express.json());
app.use("/auth", require("./routes/auth"));

app.use(
  cors({
    origin: "http://localhost:5173", // your React app
    credentials: true,
  }),
);
// This allows any frontend to access your API.
// app.use(cors());

// Chat
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

// Step 1 — JWT socket middleware
// io.use((socket, next) => {
//   const token = socket.handshake.auth.token;
//   if (!token) return next(new Error("Authentication error"));

//   try {
//     const user = jwt.verify(token, SECRET);
//     socket.user = user; // attach user to socket
//     next();
//   } catch (err) {
//     next(new Error("Invalid token"));
//   }
//   // Now only authenticated users connect.
// });

// // Step 2 — Use authenticated user in chat
// io.on("connection", async () => {
//   console.log("User Connected", socket.user.username);
//   socket.on("chat-message", async (text) => {
//     const message = await Message.create({
//       sender: socket.user.username,
//       text,
//       room: "global",
//     });
//     io.emit("chat-message", message);
//   });
// });
// Important:
// server trusts JWT, not frontend username
// prevents impersonation

server.listen(3000, () => console.log("Server running"));
