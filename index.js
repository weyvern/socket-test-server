const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const port = process.env.PORT || 8000;
const httpServer = createServer(app);

app.get('/', (req, res) => res.send('Express JS'));

const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.on('connection', socket => {
  io.emit('connection', socket.id);
});

httpServer.listen(port, () => console.log(`Server running on port ${port}`));
