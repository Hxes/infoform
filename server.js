const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('A user joined the space');

  // Listen for a "chat message" event
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Broadcast to everyone
  });

  socket.on('disconnect', () => {
    console.log('A user left the space');
  });
});

server.listen(3000, () => console.log('Chatspace running on port 3000'));
