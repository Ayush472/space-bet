import React, { useEffect, useState, useCallback } from "react";
import Navbar from "../../../NavBar";
import SideNavbar from "../../../../SideNavbar";
import Menu from "./menu";
import Hand from "./hand";
import "./../../../../../assets/css/Dashboard/rps game/rps computer/computer.css";

function Computer  () {
  const [isActive, setActive] = useState(true);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState();
  const [winner, setWinner] = useState(null);
  const [uscore, setUscore] = useState(0);
  const [cscore, setCscore] = useState(0);
  const [color, setColor] = useState("yellow");
  const [gameStatus, setGameStatus] = useState(false)
  const [playerName, setPlayername] = useState("");
    function choice(choice) {
    const computer = computerChoose();

    if(gameStatus){
      setUserChoice(choice);
    setComputerChoice(computer);
    setActive(false);  
    console.log("User Choice ", choice);

    console.log("Comp Choice ", computer);
    setTimeout(() => {
      let w = determineWinner(choice, computer);
      console.log("set winner", w);
      setWinner(w);
    }, 2000);
    }else{
      alert("Game is not created")
    }
 
   
  }

  function computerChoose() {
    const choices = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(userChoice, computerChoice) {
    console.log("userchoice", userChoice);
    console.log("computerrhoice", computerChoice);

    console.log("hii i enter the time out");
    if (userChoice === computerChoice) {
      console.log("1");
      return "draw";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("2");
      setUscore(uscore + 1);
      return "user";
    } else {
      console.log("3");
      setCscore(cscore + 1);
      return "computer";
    }
  }

  useEffect(() => {
    if (userChoice && computerChoice) {
      setTimeout(() => {
        let w = determineWinner(userChoice, computerChoice);
        console.log("set winner", w);
        setWinner(w);
      }, 2000);
    }
  }, [userChoice, computerChoice]);

  function resetGame() {
    setActive(true);
    setUserChoice(null);
    setComputerChoice(null);
    setWinner(null);
  } 
  const setColorCallBack = useCallback((colors) => {
    setColor(colors);
  }, []);
const setNameCallBack = (name)=>{setPlayername(name)}
  const cgCallBack = (isGameCreated) => {
    console.log(isGameCreated);
    setGameStatus(isGameCreated)
  }
  return (
    <>
      <Navbar />
      <div className="row" style={{ overflow: "hidden" }}>
        <div className="col-lg-1 rock-paper-scissors-side ">
          <SideNavbar />
        </div>
        <div className="col-lg-11">
          <div className="row">
            <div className="col-lg-8 rock-paper-scissors-computer-hand">
                <div className="results">
                  {winner !== null && (
                    <div className={winner ? "wrapper2 active" : "wrapper2"}>
                      {winner === "draw" ? (
                        <div className="text">
                          <span>It's a</span>
                          <span>draw!</span>
                          <button className="play-again" onClick={resetGame}>Play Again</button>
                        </div>
                      ) : (
                        <div className="text">
                          <span>{winner === "user" ? "You" : "Computer"}</span>
                          <span> won!</span>
                          <button className="play-again" onClick={resetGame}>Play Again</button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
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
                <div className="hands">
                  <Hand
                    left={true}
                    color={color}
                    type={userChoice}
                    active={userChoice ? true : false}
                    moving={
                      userChoice && computerChoice
                        ? winner
                          ? false
                          : true
                        : false
                    }
                  />

                  <Hand
                    left={false}
                    type={computerChoice}
                    active={computerChoice ? true : false}
                    moving={
                      userChoice && computerChoice
                        ? winner
                          ? false
                          : true
                        : false
                    }
                  />
                </div>
                <div className={gameStatus?"scoreboard active":"scoreboard"}>
                  <div className="players">
                    <div className="player">
                      <span className="name">{playerName}</span>
                      <span className="score">{uscore}</span>
                    </div>
                    <div className="player">
                      <span className="name">Computer</span>
                      <span className="score">{cscore}</span>
                    </div>
                  </div>
                </div>
              
            </div>
            <div className="col-lg-4 rock-paper-scissors-main-details">
              <Menu 
              nameCallback={setNameCallBack} 
              parentCallback={setColorCallBack}
                createGameCallBack={cgCallBack}
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Computer;
