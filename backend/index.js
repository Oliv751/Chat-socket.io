require("dotenv").config();
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = require("./src/app");

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3001",
  },
});

const port = parseInt(process.env.APP_PORT ?? "3000", 10);
const messages = [];

io.on("connection", (socket) => {
  socket.emit("messages", messages);
  socket.on("newMessage", (messageDetails) => {
    messages.push(messageDetails);
    io.emit("messages", messages);
  });
});

httpServer.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
