import React from "react";
import "./../../../../assets/css/Dashboard/game/snake and ladder/snake.css";
import  snake1 from "./../../../../assets/images/Game Image/snkae and ladder/snake/Snakes-01.png"
import  snake2 from "./../../../../assets/images/Game Image/snkae and ladder/snake/Snakes-02.png"
import  snake3 from "./../../../../assets/images/Game Image/snkae and ladder/snake/Snakes-03.png"
import  snake4 from "./../../../../assets/images/Game Image/snkae and ladder/snake/Snakes-04.png"
import snake5 from "./../../../../assets/images/Game Image/snkae and ladder/snake/Snakes-05.png"
import snake6 from "./../../../../assets/images/Game Image/snkae and ladder/snake/Snakes-06.png"
import snake7 from "./../../../../assets/images/Game Image/snkae and ladder/snake/Snakes-07.png"
import snake8 from "./../../../../assets/images/Game Image/snkae and ladder/snake/Snakes-08.png"
const Snake = ({ start, end,  }) => {
  const cellSize = 64;
  const startX = ((start - 1) % 10) * cellSize;
  const startY = Math.floor((start - 1) / 10) * cellSize - cellSize;
  const endX = ((end - 1) % 10) * cellSize;
  const endY = Math.floor((end - 1) / 10) * cellSize - cellSize;
  const width = Math.abs(endX - startX) + cellSize;
  const height = cellSize;
  const style = {
    left: Math.min(startX, endX),
    bottom: startY,
    width,
    height,
  };
  return (
    <>
      <div className="game-asset-img snake" >
        <img src={ snake1}  alt = "snake"/>
      </div>
      <div className="game-asset-img snake1" start={39} end={24}>
        <img src={snake2} alt="snake1" />
      </div>
      <div className="game-asset-img snake2" start={35} end={18}>
      <img src={snake7} alt="snake1" />

      </div>
     
      <div className="game-asset-img snake4" start={99} end={63}>
        <img src={snake5} alt="snake1" />
      </div>
      <div className="game-asset-img snake5" start={92} end={36}>
        <img src={snake6} alt="snake1" />
      </div>
      <div className="game-asset-img snake6" start={85} end={59}>
        <img src={snake7} alt="snake1" />
      </div>
      <div className="game-asset-img snake7" start={60} end={43}>
        <img src={snake8} alt="snake1" />
      </div>

      
    </>
  );
};

export default Snake;
