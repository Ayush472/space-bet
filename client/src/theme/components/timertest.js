// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import './App.css';

// const socket = io('http://localhost:4000');

// function App() {
//   const [playerNumber, setPlayerNumber] = useState(null);
//   const [currentTurn, setCurrentTurn] = useState('X');
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [gameOver, setGameOver] = useState(false);
//   const [gameResult, setGameResult] = useState(null);

//   useEffect(() => {
//     socket.on('player-number', (playerNumber) => {
//       setPlayerNumber(playerNumber);
//     });

//     socket.on('start-game', () => {
//       setGameOver(false);
//     });

//     socket.on('move-made', ({ board, symbol }) => {
//       setBoard(board);
//       setCurrentTurn(symbol === 'X' ? 'O' : 'X');
//     });

//     socket.on('current-turn', (symbol) => {
//       setCurrentTurn(symbol);
//     });

//     socket.on('game-over', (result) => {
//       setGameOver(true);
//       setGameResult(result);
//     });

//     socket.on('game-reset', () => {
//       setGameOver(false);
//       setBoard(Array(9).fill(null));
//       setCurrentTurn('X');
//       setGameResult(null);
//     });
//   }, []);

//   const handleCellClick = (index) => {
//     if (currentTurn === 'X' && playerNumber === 1) {
//       const newBoard = [...board];
//       newBoard[index] = 'X';
//       setBoard(newBoard);
//       socket.emit('make-move', index);
//     } else if (currentTurn === 'O' && playerNumber === 2) {
//       const newBoard = [...board];
//       newBoard[index] = 'O';
//       setBoard(newBoard);
//       socket.emit('make-move', index);
//     }
//   };

//   const renderCell = (index) => {
//     return (
//       <div className="cell" onClick={() => handleCellClick(index)}>
//         {board[index]}
//       </div>
//     );
//   };

//   return (
//     <div className="app">
//       <h1>Tic Tac Toe</h1>
//       {gameOver && <div className="game-over">{gameResult}</div>}
//       <div className="board">
//         {renderCell(0)}
//         {renderCell(1)}
//         {renderCell(2)}
//         {renderCell(3)}
//         {renderCell(4)}
//         {renderCell(5)}
//         {renderCell(6)}
//         {renderCell(7)}
//         {renderCell(8)}
//       </div>
//       {playerNumber && (
//         <div className="info">
//           <h3>You are player {playerNumber}</h3>
//           <h3>Current turn: {currentTurn}</h3>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
