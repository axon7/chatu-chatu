const app = require("http").createServer();
const io = (module.exports.io = require("socket.io")(app));

let port = process.env.port || 3456;

io.on("connection", socket => {
  console.log("user connected!");
});

app.listen(port, () => {
  console.log("server running on port: " + port);
});
