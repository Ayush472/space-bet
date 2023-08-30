import React from 'react';
import './../../../../assets/css/Dashboard/game/snake and ladder/computer.css';

import PointerPositionComputer from "./PointerPositionComputer.json";
const Computer = ({ position }) => {
  console.log("computer intial",position);
  const x = PointerPositionComputer[position].left;
  const y = PointerPositionComputer[position].bottom;
  console.log("left", x);
  console.log("bottom", y);
  return (
    <div
      className="computer"
      style={{ left: parseInt(x), bottom: parseInt(y) }}
    ></div>
  );
};

export default Computer;
