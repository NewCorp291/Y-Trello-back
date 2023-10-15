import { Response } from "express";
import * as socketio from 'socket.io';

const express = require("express");
const { PrismaClient } = require('@prisma/client');
const socketIo = require("socket.io");

const app = express();
const server = require("http").Server(app);
const port = process.env.PORT || 3001;
const prisma = new PrismaClient();
const io = socketIo(server);

app.use(express.json());

app.get('/cards', async (req: Request, res: Response) => {
  const cards = await prisma.card.findMany();
  res.json(cards);
})

io.on('connection', (socket: socketio.Socket) => {
  socket.on('new-card', (card) => {
    console.log('Nouvelle carte créee :', );
  });
  socket.on('update-card', (card) => {
    console.log(`La carte ${card} à été mise à jour`);
  });
  socket.on('delete-card', (card) => {
    console.log(`La carte ${card } à été supprimé`  );
  });
})

// app.use("/api/cards", require("./routes/cardRoutes"));

app.io = io;

// app.get("/", (req: Request, res: Response) => {
//   res.send('Hello TypeScript Express !');
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});