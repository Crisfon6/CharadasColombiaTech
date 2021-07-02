const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const express = require('express');
const cors = require('cors');
require('dotenv').config();



app.use(cors());
app.use(express.static('public'));
const rooms = [];

io.on("connection", socket => {
    let previousId;
    const safeJoin = currentId => {
        socket.leave(previousId);
        socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
        previousId = currentId;
    }
    socket.on('createRoom', roomId => {
        console.log('CREATE ROOM', roomId);
        rooms.push({ id: roomId, players: [] });
        safeJoin(roomId);
        // io.emit('rooms', rooms.map(el => el.id));
        socket.emit('room', roomId);
        io.emit('rooms', rooms);
    });
    socket.on('getRoom', roomId => {
        console.log('GETROOM', roomId);
        safeJoin(roomId);
        let room = rooms.find(el => el.id === roomId);
        socket.emit('room', room);
    });
    socket.on('addPlayer', player => {
        console.log('ASDD PALYER', player);
        rooms.forEach((el, i) => {
            if (el.id === player.idRoom) {
                let players = el.players.map(el => el.player);
                if (!players.includes(player)) {
                    el.players.push({ player: player.player, active: true });
                }
            }

        });
        let room = rooms.find(el => el.id === player.idRoom);
        socket.to(player.idRoom).emit("room", room);
        io.emit('rooms', rooms);
        // socket.emit('room', player);
    });
    socket.on('badResponse', data => {
        console.log('bad PALYER', data);
        rooms.forEach((el, i) => {
            if (el.id === data.idRoom) {

                el.players.forEach((player, iPlayer) => {
                    if (player.player === data.player) {
                        console.log('PLAYER', rooms[i].players[iPlayer])
                        rooms[i].players[iPlayer].active = false;
                    }
                })
            }
        });
        console.log('FIN', rooms[0].players);
        let room = rooms.find(el => el.id === data.idRoom);
        socket.to(room.id).emit("room", room);
        io.emit("room", room);
        io.emit('rooms', rooms);
    });

    socket.on("addDoc", doc => {
        rooms[doc.id] = doc;
        safeJoin(doc.id);
        io.emit("documents", Object.keys(rooms));
        socket.emit("document", doc);
    });

    socket.on("editDoc", doc => {
        rooms[doc.id] = doc;
        socket.to(doc.id).emit("document", doc);
    });
    io.emit("rooms", rooms);

    console.log(`Socket ${socket.id} has connected`);

});
http.listen(process.env.PORT, () => {
    console.log('Listening on port:', process.env.PORT);
});