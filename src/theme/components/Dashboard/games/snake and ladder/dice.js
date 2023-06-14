// Dice.js
import React,{useRef, useState} from "react";
import "./../../../../assets/css/Dashboard/game/snake and ladder/dice.css";
import dice1 from "./../../../../assets/images/Game Image/snkae and ladder/dice/dice-1.png";
import dice2 from "./../../../../assets/images/Game Image/snkae and ladder/dice/dice-2.png";
import dice3 from "./../../../../assets/images/Game Image/snkae and ladder/dice/dice-3.png";
import dice4 from "./../../../../assets/images/Game Image/snkae and ladder/dice/dice-4.png";
import dice5 from "./../../../../assets/images/Game Image/snkae and ladder/dice/dice-5.png";
import dice6 from "./../../../../assets/images/Game Image/snkae and ladder/dice/dice-6.png";

const Dice = (value) => {
    let ayush = value
    console.log("ayush",ayush);
  let dice = document.querySelector("dice");
  var outputDiv = document.querySelector("diceResult");
 const [isActive ,setActive]= useState(false)
const diceRef  = useRef(value)
  function rollDice() {
    console.log("rolldice call");
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    console.log("rolldice result",result);
    console.log("rolldice dice",dice);
diceRef.current.setAttribute("data-side",result)
    setActive(!isActive)
    console.log(result);
   


  }
 

  return (
    <div className={"dice"}>
      <div id="dice" ref={diceRef } className={ isActive ? "reRoll" : " "} data-side="1">
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
      <div className="button">
        <button onClick={rollDice} >roll</button>
      </div>
    </div>
  );
};

export default Dice;
