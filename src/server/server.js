const express = require("express");

const app = express();
const server = require("http").Server(app);
// This creates our socket using the instance of the server
const io = (module.exports.io = require("socket.io")(app));

let port = process.env.port || 3456;

// const SocketManager = require("./SockerManager.js");
app.use(express.static(__dirname + "/../../build"));

io.on("connection", socket => {
  console.log("user connected id: " + socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  //listening for chat event data
  socket.on("chat", data => {
    console.log("i received a message", data);
    io.emit("chat", data);
  });
});

server.listen(port, () => {
  console.log("server running on port: " + port);
});
