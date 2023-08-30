import React from 'react';
import './../../../../assets/css/Dashboard/game/snake and ladder/ladder.css';
import ladder1 from "./../../../../assets/images/Game Image/snkae and ladder/ladder/Ladder-06.png"
import ladder2 from "./../../../../assets/images/Game Image/snkae and ladder/ladder/Ladder-04.png"
import ladder3 from "./../../../../assets/images/Game Image/snkae and ladder/ladder/Ladder-03.png"
import ladder4 from "./../../../../assets/images/Game Image/snkae and ladder/ladder/Ladder-03.png"
import ladder5 from "./../../../../assets/images/Game Image/snkae and ladder/ladder/Ladder-07.png"
const Ladder = ({ start, end }) => {

  return (
    <>

    <div className="game-asset-img ladder1"  start={9} end={24}>
    <img src={ladder1} alt="ladder1" />
    </div>
    <div className="game-asset-img ladder2"  start={20} end={50}>
    <img src={ladder1} alt="ladder1" />
    </div>
    <div className="game-asset-img ladder3"  start={50} end={91}>
    <img src={ladder2} alt="ladder1" />
    </div>
    <div className="game-asset-img ladder4"  start={50} end={91}>
    <img src={ladder3} alt="ladder1" />
    </div>
    <div className="game-asset-img ladder5"  start={56} end={90}>
    <img src={ladder4} alt="ladder1" />
    </div>
    <div className="game-asset-img ladder6"  start={64} end={85}>
    <img src={ladder5} alt="ladder1" />
    </div>
    </>
  );
};

export default Ladder;
