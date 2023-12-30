const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    if (socket.userName) {
      io.emit("user-left", `${socket.userName} left the chat`);
      console.log("A user disconnected");
    }
  });

  socket.on("chat message", (message) => {
    io.emit("chat message", message);
  });

  socket.on("user-joined", (name) => {
    socket.userName = name;
    io.emit("user-joined", `${name} joined the chat`);
  });
});

server.listen(3000, (err) => {
  if (err) {
    console.error("Server failed to start:", err);
  } else {
    console.log("Server is running on port 3000");
    console.log("http://localhost:3000/");
  }
});
