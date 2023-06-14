import React from 'react';
import './../../../../assets/css/Dashboard/game/snake and ladder/player.css';
import PointerPosition from "./PointerPosition.json"
const Player = ({ position }) => {
const x = PointerPosition[position].left
const y = PointerPosition[position].bottom

return (
<div className="snake-and-ladder-player" style={{ left: parseInt(x) , bottom: parseInt(y) }}></div>
);
};  

export default Player;