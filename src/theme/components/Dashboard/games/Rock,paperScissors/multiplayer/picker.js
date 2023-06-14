import React, { useState, useEffect } from "react";
import "./../../../../../assets/css/Dashboard/rps game/rps multiplayer/picker.css";
import { socket } from "./context/socket";

export default function Picker({ active, color = "yellow", gameStatus }) {
  const [isActive, setActive] = useState(true);

  function choice(type) {
    if(gameStatus){
      socket.emit("rps-choice", type);
      setActive(false);
    }else{
      alert("Game is not created")
    }
  }

  useEffect(() => {
    setActive(active === false);
  }, [active]);

  return (
    <>
      <div className={isActive ? "picker active" : "picker"}>
        <div className="options">
          <img
            onClick={() => choice("rock")}
            className="image"
            src={require(`./../../../../../assets/images/Game Image/rps game/multip/${color}-rock.png`)}
            alt="rock"
          />
          <img
            onClick={() => choice("paper")}
            className="image"
            src={require(`./../../../../../assets/images/Game Image/rps game/multip/${color}-paper.png`)}
            alt="paper"
          />
          <img
            onClick={() => choice("scissors")}
            className="image"
            src={require(`./../../../../../assets/images/Game Image/rps game/multip/${color}-scissors.png`)}
            alt="scissors"
          />
        </div>
      </div>
    </>
  );
}
