const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

//returns the html file to the client user
app.use(express.static('public'));

io.on('connection', (socket) => {
    
    // console.log(socket);

 try {
    io.emit('user connected', 'A new user has joined the chat');
    io.emit('user connected from a', 'A new user has joined the chat from Africa');

    console.log('a user connected');
} catch (error) {
  console.log(error)  
}
    
   

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});