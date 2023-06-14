import React, { useState, useEffect, useRef } from "react";
import Board from "./board";
import Player from "./player";
import Ladder from "./ladder";
import Snake from "./snake";
import Computer from "./computer";
import Navbar from "../../NavBar";
import SideNavbar from "../../../SideNavbar";
import SnakeGameMenu from "./register";
import "./../../../../assets/css/Dashboard/game/snake and ladder/game.css";
import "./../../../../assets/css/Dashboard/game/snake and ladder/dice.css";

const SnakeGame = () => {
  const [playerPosition, setPlayerPosition] = useState(0);
  const [computerPosition, setComputerPosition] = useState(0);
  const [name, setName] = useState("");
  const [isActive, setActive] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [userTurn, setUserTurn] = useState(true)
  const diceRef = useRef(0);
  var n=1;
  var m =0;
  useEffect(() => {
    if (playerPosition >= 100) {
      alert("Congratulations! You won!");
    }
    if (computerPosition >= 100) {
      alert('Sorry, you lost!');
    }
  }, [playerPosition,computerPosition]);

  console.log("player position", playerPosition);
  console.log("computer position", computerPosition);

  const handleRollDice = () => {
    setUserTurn(true)
    let result = Math.floor(Math.random() * (6)) + 1;
    diceRef.current.setAttribute("data-side", result);

    setPlayerPosition((pos) => {
      let newPosition = pos + result;
      if (newPosition > 100) {
        return getNewPositionAfterSnakesAndLadders(pos);
      }
      return getNewPositionAfterSnakesAndLadders(newPosition);
    })
    
      setTimeout(()=>{
        setUserTurn(false)
        handleSystemNumber()
      },4000)


  };

  const handleSystemNumber = () => {
    setTimeout(()=>{
      setUserTurn(true)
    },4000)

    setComputerPosition((pos) => {
      let newPosition = pos + Math.floor(Math.random() * 6) + 1;
      if (newPosition > 100) {
        return getNewPositionAfterSnakesAndLadders(pos);
      }
      return getNewPositionAfterSnakesAndLadders(newPosition);
    });
  }

  const getNewPositionAfterSnakesAndLadders = (position) => {
    const snakes = [
      { start: 14, end: 7 },
      { start: 32, end: 15 },
      { start: 39, end: 24 },
      { start: 60, end: 43 },
      { start: 92, end: 36 },
      { start: 99, end: 63 },
    ];
    const ladders = [
      { start: 15, end: 37 },
      { start: 13, end: 31 },
      { start: 46, end: 64 },
      { start: 52, end: 86 },
      { start: 70, end: 91 },
      { start: 80, end: 98 },
    ];

    let newPosition = position;
    console.log("ayush", position);
    snakes.forEach((snake) => {
      if (position === snake.start) {
        newPosition = snake.end;
      }
    });
    ladders.forEach((ladder) => {
      if (position === ladder.start) {
        newPosition = ladder.end;
      }
    });
    return newPosition;
  };

  return (
    <>
      <Navbar />
      <div className="row" style={{ overflow: "hidden" }}>
        <div className="col-lg-1 ">
          <SideNavbar />
        </div>
        <div className="col-lg-11 ">
          <div className="row">
            <div className="col-lg-8 snake-ladder">
              <div className="snake-game">
                <Board size={100}>
                  {/* <Snake />

                  <Ladder  /> */}
                  <Player position={playerPosition} />
                  <Computer position={computerPosition} />
                </Board>
                <div className="dice">
                  <div
                    id="dice"
                    ref={diceRef}
                    className={isActive ? "reRoll" : " "}
                    data-side="1"
                  >
                    <div className="sides side-1">
                      <span className="dot dot-1"></span>
                    </div>
                    <div className="sides side-2">
                      <span className="dot dot-1"></span>
                      <span className="dot dot-2"></span>
                    </div>
                    <div className="sides side-3">
                      <span className="dot dot-1"></span>
                      <span className="dot dot-2"></span>
                      <span className="dot dot-3"></span>
                    </div>
                    <div className="sides side-4">
                      <span className="dot dot-1"></span>
                      <span className="dot dot-2"></span>
                      <span className="dot dot-3"></span>
                      <span className="dot dot-4"></span>
                    </div>
                    <div className="sides side-5">
                      <span className="dot dot-1"></span>
                      <span className="dot dot-2"></span>
                      <span className="dot dot-3"></span>
                      <span className="dot dot-4"></span>
                      <span className="dot dot-5"></span>
                    </div>
                    <div className="sides side-6">
                      <span className="dot dot-1"></span>
                      <span className="dot dot-2"></span>
                      <span className="dot dot-3"></span>
                      <span className="dot dot-4"></span>
                      <span className="dot dot-5"></span>
                      <span className="dot dot-6"></span>
                    </div>
                  </div>
                </div>
                <div className="snake-ladder-Roll-Dice">

                  <button  onClick={handleRollDice} >Roll Dice</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 snake-start-page">
              <SnakeGameMenu turn={userTurn} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SnakeGame;
