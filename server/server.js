const Server = require("socket.io").Server;
const nano = require("nanoid").customAlphabet;
const computeWinner = require("./game.js");
const newId = nano("23456789ABCDEFGHJKLPQRSTUVXYZ", 4);

const io = new Server({
  cors: {
    origin: "*",
  },
});

const state = {};
const rooms = {};

io.on("connection", (client) => {
  console.log(`${client.id} connected`);

  client.on("create-room", (name, color) => {
    if (rooms[client.id]) return;
    if (!name) name = "Player 1";
    if (!color) color = "yellow";

    let room = newId();
    client.emit("room-code", room);
    rooms[client.id] = room;

    state[room] = {
      players: {
        [client.id]: {
          name: name,
          color: color,
          score: 0,
          choice: "",
        },
      },
    };

    client.join(room);
    io.to(room).emit("players", state[rooms[client.id]], room);
  });

  client.on("join-room", (room, name, color) => {
    if (!room) {
      return client.emit("error", `No room code was provided.`);
    }
    if (!name) name = "Player 2";
    if (!color) color = "yellow";

    let getRoom = io.sockets.adapter.rooms.get(room);
    let numClients = 0;

    if (getRoom) {
      numClients = getRoom.size;
    }

    if (numClients === 0) {
      return client.emit("error", `A room with code ${room} does not exist.`);
    }

    if (numClients > 1) {
      return client.emit("error", "That room is full.");
    }

    rooms[client.id] = room;

    Object.assign(state[room].players, {
      [client.id]: {
        name: name,
        color: color,
        score: 0,
        choice: "",
      },
    });

    client.join(room);
    io.to(room).emit("players", state[rooms[client.id]], room);
  });

  client.on("getinfo", (word) => {
    console.log(state[rooms[client.id]]);
    console.log(state[rooms]);
    console.log(rooms);
    console.log(JSON.stringify(state));
    console.log("client send", word);
    console.log(state[rooms[client.id]]?.players[0]);
    console.log(state[rooms[client.id]]?.players);
  });
});

io.listen(5001);
