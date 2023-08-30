const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let player1 = null;
let player2 = null;
let currentTurn = 'X';
let board = Array(9).fill(null);

io.on('connection', (socket) => {
  console.log('A user connected.');

  if (!player1) {
    player1 = socket;
    player1.symbol = 'X';
    socket.emit('player-number', 1);
  } else if (!player2) {
    player2 = socket;
    player2.symbol = 'O';
    socket.emit('player-number', 2);
    io.emit('start-game');
  } else {
    socket.emit('err', 'Sorry, the game is full.');
    socket.disconnect();
  }

  socket.on('make-move', (index) => {
    if (currentTurn === socket.symbol) {
      board[index] = socket.symbol;
      io.emit('move-made', { board, symbol: socket.symbol });
      if (checkWin(socket.symbol)) {
        io.emit('game-over', `${socket.symbol} wins!`);
        resetGame();
      } else if (checkDraw()) {
        io.emit('game-over', `Draw game!`);
        resetGame();
      } else {
        currentTurn = currentTurn === 'X' ? 'O' : 'X';
        io.emit('current-turn', currentTurn);
      }
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected.');
    if (player1 === socket) {
      player1 = null;
      resetGame();
    } else if (player2 === socket) {
      player2 = null;
      resetGame();
    }
  });
});

const checkWin = (symbol) => {
  const winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winStates.length; i++) {
    const [a, b, c] = winStates[i];
    if (board[a] === symbol && board[b] === symbol && board[c] === symbol) {
      return true;
    }
  }

  return false;
};

const checkDraw = () => {
  return board.every((cell) => cell !== null);
};

const resetGame = () => {
  board = Array(9).fill(null);
  currentTurn = 'X';
  io.emit('game-reset');
};

server.listen(4000, () => {
  console.log('Server listening on port 4000.');
});
