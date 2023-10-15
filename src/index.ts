import * as socketio from "socket.io";
const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

io.on("connection", (socket : socketio.Server) => {
  socket.on("card", (card) => {
    io.emit("card", card);
  })

  socket.on("card:update", (card) => {
    io.emit("card:update", card);
  })

  socket.on("card:delete", (card) => {
    io.emit("card:delete", card);
  })
})