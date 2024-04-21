const express = require("express");
const CommunityRouter = express.Router();
const app = express();
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
});

module.exports = CommunityRouter;
