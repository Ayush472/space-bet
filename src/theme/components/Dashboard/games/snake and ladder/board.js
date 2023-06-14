import React from 'react';
import './../../../../assets/css/Dashboard/game/snake and ladder/board.css';
const Board = ({children}) => {
    const renderCells = () => {
      const rows = [];
      let currentRow = [];
      let count = 100;
      for (let i = 10; i > 0; i--) {
        for (let j = 10; j > 0; j--) {
          if (i % 2 === 0) {
            currentRow.push(count);
          } else {
            currentRow.unshift(count);
          }
          count--;
        }
        rows.push(currentRow);
        currentRow = [];
      }
      return rows.map((row, index) => (
          
            row.map((cell) => (
            <div className={`cell cell-${cell}`} key={cell}>
              {cell}
            </div>
          ))
      ));
    };
  
    return <div className="board">
    {renderCells()}
    {children}
    </div>;
  };
  
    export default Board;