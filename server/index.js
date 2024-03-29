const express = require("express");
const app = express();
const nano = require("nanoid").customAlphabet;
const newId = nano("23456789ABCDEFGHJKLPQRSTUVXYZ", 4);
const computeWinner = require("./game.js");
const PORT = 4000;
const http = require("http").Server(app);
const cors = require("cors");
const { send } = require("process");
const io = require("socket.io")(http, {
  cors: {
    origin: "https://space-bet.onrender.com",
  },
});
app.use(cors());
// const port = process.env.PORT || 3001;

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "https://space-bet.onrender.com/",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type"],
//     credentials: true,
//   },
// });

// app.use(cors());
const state = {};
const rooms = {};

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  console.log(`${socket.id} connected`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("create-room", (name, color) => {
    if (rooms[socket.id]) return;
    if (!name) {
      name = "Player 1";
    }
    if (!color) {
      color = "yellow";
    }

    let room = newId();

    socket.emit("room-code", room);
    rooms[socket.id] = room;

    state[room] = {
      players: {
        [socket.id]: {
          name: name,
          color: color,
          score: 0,
          choice: "",
        },
      },
    };

    socket.join(room);
    io.to(room).emit("players", state[rooms[socket.id]], room);
  });
  socket.on("join-room", (room, name, color) => {
    if (!room) {
      return socket.emit("error", `No room code was provided.`);
    }

    if (!name) {
      name = "Player 2";
    }
    if (!color) {
      color = "yellow";
    }

    let getRoom = io.sockets.adapter.rooms.get(room);

    let numClients = 0;

    if (getRoom) {
      numClients = getRoom.size;
    }

    if (numClients === 0) {
      return socket.emit("error", `A room with code ${room} does not exist.`);
    }

    if (numClients > 1) {
      return socket.emit("error", "That room is full.");
    }

    rooms[socket.id] = room;

    Object.assign(state[room].players, {
      [socket.id]: {
        name: name,
        color: color,
        score: 0,
        choice: "",
      },
    });

    socket.join(room);
    io.to(room).emit("players", state[rooms[socket.id]], room);
  });

  socket.on("getinfo", (word) => {
    console.log(state[rooms[socket.id]]);
    console.log(state[rooms]);
    console.log(rooms);
    console.log(JSON.stringify(state));
    console.log("socket send", word);
    console.log(state[rooms[socket.id]]?.players[0]);
    console.log(state[rooms[socket.id]]?.players);
  });
  socket.on("rps-choice", (choice) => {
    if (!state[rooms[socket.id]]) return;

    const players = state[rooms[socket.id]].players;

    Object.assign(players[socket.id], { choice: choice });

    io.to(rooms[socket.id]).emit(
      "players",
      state[rooms[socket.id]],
      rooms[socket.id]
    );

    let playerOne = Object.values(players)[0];
    let playerTwo = Object.values(players)[1];

    if (playerOne.choice && playerTwo?.choice) {
      let winner = computeWinner(playerOne, playerTwo);

      if (winner !== "draw") {
        winner.score++;
      }

      io.to(rooms[socket.id]).emit("rps-winner", winner);

      playerOne.choice = "";
      playerTwo.choice = "";
    }
  });

  socket.on("rps-reset", () => {
    if (!state[rooms[socket.id]]) return;
    io.to(rooms[socket.id]).emit(
      "players",
      state[rooms[socket.id]],
      rooms[socket.id]
    );
  });

  socket.on("disconnect", () => {
    if (state[rooms[socket.id]]) {
      let room = rooms[socket.id];
      console.log(`${socket.id} disconnected from ${room}`);

      if (Object.keys(state[rooms[socket.id]].players).length === 1) {
        delete state[rooms[socket.id]];
        return delete rooms[socket.id];
      }

      delete state[rooms[socket.id]].players[socket.id];
      io.to(room).emit("players", state[rooms[socket.id]], rooms[socket.id]);
      delete rooms[socket.id];
    }
  });
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
http.listen(PORT, () => {
  console.log("SERVER IS RUNNING on ", PORT);
});
