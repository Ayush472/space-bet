// import React, { useState } from 'react';

// const CHOICES = ['rock', 'paper', 'scissors'];

// function Game() {
//   const [playerOneChoice, setPlayerOneChoice] = useState(null);
//   const [playerTwoChoice, setPlayerTwoChoice] = useState(null);
//   const [playerOneScore, setPlayerOneScore] = useState(0);
//   const [playerTwoScore, setPlayerTwoScore] = useState(0);
//   const [result, setResult] = useState(null);

//   const handlePlayerOneChoice = (choice) => {
//     const updatedPlayerTwoChoice = playerTwoChoice;
//     setPlayerOneChoice(choice);
//     if (updatedPlayerTwoChoice) {
//       if (choice === updatedPlayerTwoChoice) {
//         setResult('tie');
//       } else if (
//         (choice === 'rock' && updatedPlayerTwoChoice === 'scissors') ||
//         (choice === 'paper' && updatedPlayerTwoChoice === 'rock') ||
//         (choice === 'scissors' && updatedPlayerTwoChoice === 'paper')
//       ) {
//         setPlayerOneScore(playerOneScore + 1);
//         setResult('playerOneWin');
//       } else {
//         setPlayerTwoScore(playerTwoScore + 1);
//         setResult('playerTwoWin');
//       }
//     }
//   };

//   const handlePlayerTwoChoice = (choice) => {
//     const updatedPlayerOneChoice = playerOneChoice;
//     setPlayerTwoChoice(choice);
//     if (updatedPlayerOneChoice) {
//       if (choice === updatedPlayerOneChoice) {
//         setResult('tie');
//       } else if (
//         (choice === 'rock' && updatedPlayerOneChoice === 'scissors') ||
//         (choice === 'paper' && updatedPlayerOneChoice === 'rock') ||
//         (choice === 'scissors' && updatedPlayerOneChoice === 'paper')
//       ) {
//         setPlayerTwoScore(playerTwoScore + 1);
//         setResult('playerTwoWin');
//       } else {
//         setPlayerOneScore(playerOneScore + 1);
//         setResult('playerOneWin');
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Rock Paper Scissors - Player vs Player</h1>
//       <p>
//         Player One Score: {playerOneScore} - Player Two Score: {playerTwoScore}
//       </p>
//       {result && (
//         <p>
//           {result === 'tie' && 'It is a tie!'}
//           {result === 'playerOneWin' && 'Player One wins!'}
//           {result === 'playerTwoWin' && 'Player Two wins!'}
//         </p>
//       )}
//       <div>
//         <h2>Player One</h2>
//         {CHOICES.map((choice) => (
//           <button key={choice} onClick={() => handlePlayerOneChoice(choice)}>
//             {choice}
//           </button>
//         ))}
//       </div>
//       <div>
//         <h2>Player Two</h2>
//         {CHOICES.map((choice) => (
//           <button key={choice} onClick={() => handlePlayerTwoChoice(choice)}>
//             {choice}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Game;
import React, { useState } from 'react';

const CHOICES = ['rock', 'paper', 'scissors'];

function Game() {
  const [playerOneChoice, setPlayerOneChoice] = useState(null);
  const [playerTwoChoice, setPlayerTwoChoice] = useState(null);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [result, setResult] = useState(null);

  const handlePlayerOneChoice = (choice) => {
    setPlayerOneChoice(choice);
    if (playerTwoChoice) {
      if (choice === playerTwoChoice) {
        setResult('tie');
      } else if (
        (choice === 'rock' && playerTwoChoice === 'scissors') ||
        (choice === 'paper' && playerTwoChoice === 'rock') ||
        (choice === 'scissors' && playerTwoChoice === 'paper')
      ) {
        setPlayerOneScore(playerOneScore + 1);
        setResult('playerOneWin');
      } else {
        setPlayerTwoScore(playerTwoScore + 1);
        setResult('playerTwoWin');
      }
    }
  };

  const handlePlayerTwoChoice = (choice) => {
    setPlayerTwoChoice(choice);
    if (playerOneChoice) {
      if (choice === playerOneChoice) {
        setResult('tie');
      } else if (
        (choice === 'rock' && playerOneChoice === 'scissors') ||
        (choice === 'paper' && playerOneChoice === 'rock') ||
        (choice === 'scissors' && playerOneChoice === 'paper')
      ) {
        setPlayerTwoScore(playerTwoScore + 1);
        setResult('playerTwoWin');
      } else {
        setPlayerOneScore(playerOneScore + 1);
        setResult('playerOneWin');
      }
    }
  };

  return (
    <div>
      <h1>Rock Paper Scissors - Player vs Player</h1>
      <p>
        Player One Score: {playerOneScore} - Player Two Score: {playerTwoScore}
      </p>
      {result && (
        <p>
          {result === 'tie' && 'It is a tie!'}
          {result === 'playerOneWin' && 'Player One wins!'}
          {result === 'playerTwoWin' && 'Player Two wins!'}
        </p>
      )}
      <div>
        <h2>Player One</h2>
        <button onClick={() => handlePlayerOneChoice('rock')}>Rock</button>
        <button onClick={() => handlePlayerOneChoice('paper')}>Paper</button>
        <button onClick={() => handlePlayerOneChoice('scissors')}>Scissors</button>
      </div>
      <div>
        <h2>Player Two</h2>
        <button onClick={() => handlePlayerTwoChoice('rock')}>Rock</button>
        <button onClick={() => handlePlayerTwoChoice('paper')}>Paper</button>
        <button onClick={() => handlePlayerTwoChoice('scissors')}>Scissors</button>
      </div>
    </div>
  );
}

export default Game;
