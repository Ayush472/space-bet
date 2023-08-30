import React, { useState, useEffect } from "react";
import SideNavbar from "../../SideNavbar";
import "./../../../assets/css/Dashboard/tic.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WinningLine from "./winingline";
import Navbar from "../NavBar";
const Square = (props) => {
  return (
    <>
      <button
        id="tic-tac-toe-square"
        disabled={props.value ? true : false}
        className={
          props.className
            ? `${props.className} tic-tac-toe-btn1 `
            : "tic-tac-toe-btn1"
        }
        onClick={props.onClick}
      >
        {props.value}
      </button>
    </>
  );
};

const Tic = () => {
  const [player1, setPlayer1] = useState({
    name: "",
    symbol: "O",
  });
  const [player2, setPlayer2] = useState({
    name: "",
    symbol: "X",
  });

  const [scores, setScores] = useState({
    X: 0,
    O: 0,
  });

  const [turn, setTurn] = useState(true);
  const [timerSecond, setTimerSecond] = useState(true);
  const [timer1, setTimer1] = useState(10);
  const [intervalFun, setIntervalFun] = useState(null);
  const initialState = ["", "", "", "", "", "", "", "", ""];
  const [gameState, setGameState] = useState(initialState);
  const [isXturn, setIsXturn] = useState(false);
  const [winningLine, setWinningLine] = useState(null);

  const reStartTime = () => {
    clearInterval(intervalFun);
    setIntervalFun(null);
    setTimer1(10);
    startTime();
  };

  const stopTime = () => {
    clearInterval(intervalFun);
    setIntervalFun(null);
    setTimer1(10);
  };

  useEffect(() => {}, [player1]);

  const checkWinner = (props) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        const wscore = gameState[a];

        setScores((prevScores) => ({
          ...prevScores,
          [wscore]: prevScores[wscore] + 1,
        }));
        setWinningLine(i);

        return wscore;
      }
    }
    return null;
  };

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    let turnVal = isXturn ? "X" : "O";

    // strings[index] = player1.symbol === "O" ? "O" : "X";
    strings[index] = turnVal;
    reStartTime();
    console.log(isXturn);
    setGameState(strings);
    setIsXturn(!isXturn);
  };

  let pdata1 = localStorage.getItem("player1Data");
  let pdata2 = localStorage.getItem("player2Data");
  let data1 = JSON.parse(pdata1);
  let data2 = JSON.parse(pdata2);

  const onSelectChange = (e) => {
    setPlayer1({
      ...player1,
      symbol: e.target.value,
    });
    setPlayer2({ ...player2, symbol: e.target.value === "O" ? "X" : "O" });
  };

  const onstartclicked = () => {
    setTurn(false);

    if (player1.symbol === "X") {
      setIsXturn(true);
    }

    localStorage.setItem("player1Data", JSON.stringify({ player1: player1 }));
    localStorage.setItem("player2Data", JSON.stringify({ player2: player2 }));

    console.log(player1.symbol);
    console.log(player2.symbol);
    if (player1.name === "") {
      toast.error("there is no player one");
    } else if (player2.name === "") {
      toast.error("there is no player two");
    } else if (player1.name === player2.name) {
      toast.error("Please Enter different name");
    } else if (player1.symbol === "") {
      toast.error("Please select the symbol");
    } else {
      document.getElementById("game_portion").style.pointerEvents = "all";
      document.getElementById("start").style.display = "none";
      toast.success("game Create Successfully");
      playerTurn();
      // if(document.getElementById("square").clicked === false){
      //   alert("hii ")
      // }
      if (player1.symbol === "X") {
        document.getElementById("Oturn").style.display = "none";
        document.getElementById("xturn").style.display = "block";
      } else {
        document.getElementById("Oturn").style.display = "block";
        document.getElementById("xturn").style.display = "none";
      }
      document.getElementById("details").style.pointerEvents = "none";
      startTime();
    }
  };

  const playerTurn = () => {
    if (turn === false) {
      setTimeout(() => {
        if (isXturn === false) {
          document.getElementById("Oturn").style.display = "block";
          document.getElementById("xturn").style.display = "none";
        } else {
          document.getElementById("xturn").style.display = "block";
          document.getElementById("Oturn").style.display = "none";
        }
      }, 200);
    } else {
      console.log("ayush", turn);
    }
  };

  const startTime = () => {
    setIntervalFun(
      setInterval(() => {
        setTimer1((timer1) => timer1 - 1);
      }, 1000)
    );
  };

  useEffect(() => {
    if (timer1 === 0) {
      stopTime();
      // alert(isXturn?"X":"O")
      if (player1.symbol === "X" && isXturn) {
        toast(player1.name + " is not responding");
        setGameState(initialState);
      } else {
        toast(player2.name + " is not responding");
        setGameState(initialState);
      }
    }
  }, [timer1]);

  useEffect(() => {
    playerTurn();
  }, [isXturn]);

  const onResetclicked = () => {
    setGameState(initialState);
    setPlayer1({
      name: "",
      symbol: "O",
    });
    setPlayer2({
      name: "",
      symbol: "X",
    });
    setScores({
      O: 0,
      X: 0,
    });
    localStorage.removeItem("player1Data");
    localStorage.removeItem("player2Data");
    document.getElementById("game_portion").style.pointerEvents = "none";
    document.getElementById("start").style.display = "block";
    document.getElementById("xturn").style.display = "none";
    document.getElementById("Oturn").style.display = "none";
    document.getElementById("details").style.pointerEvents = "all";
    setWinningLine(null);
  };

  useEffect(() => {
    const winner = checkWinner();
    console.log("winneer", winner);
    if (winner) {
      console.log("winneer", winner);
      toast("hiii");
      setTimeout(() => {
        if (player1.symbol === winner) {
          toast.success(player1.name + " win the match", {
            style: { textAlign: "center", justifyContent: "center" },
          });
        } else if (player2.symbol === winner) {
          toast.success(player2.name + " win the match");
        }
        setTimeout(() => {
          setGameState(initialState);
          setWinningLine(null);
        }, 3000);
        stopTime();
      }, 100);
    } else {
      if (!gameState.includes("")) {
        toast("match is Draw");
        console.log("2", gameState);

        setGameState(initialState);
      }
    }
    // ...
  }, [gameState]);

  return (
    <>
      <Navbar />
      <div className="row" style={{ overflow: "hidden" }}>
        <div className="col-lg-1 ">
          <SideNavbar />
        </div>
        <div className="col-lg-11">
          <div className="row">
            <div className="col-lg-8  gamemain">
              <div className="game-info">
                <div className="d-flex flex-row justify-content-center deits">
                  <div className="pal-1 d-flex flex-row ">
                    <div>
                      <span id="plu1">
                        {" "}
                        Name: {player1.name && player1.name}{" "}
                        {player1.symbol && player1.symbol}
                      </span>
                    </div>
                    <div id="player1" style={{ display: "none" }}>
                      ARRow
                    </div>
                  </div>
                  <div className="pal-2 d-flex flex-row ">
                    <div id="player2" style={{ display: "none" }}>
                      arrow
                    </div>
                    <div>
                      <span id="plu2">
                        {" "}
                        Name: {player2.name && player2.name}{" "}
                        {player2.symbol && player2.symbol}
                      </span>
                    </div>
                  </div>
                </div>
                <div>Timer: {timer1}</div>
              </div>
              <div className="gamepage">
                <div className="game-board" id="game_portion">
                  <div className="rows jc-center">
                    <Square
                      id="first"
                      className="b-bottom-right"
                      value={gameState[0]}
                      onClick={() => onSquareClicked(0)}
                    />
                    <Square
                      className="b-bottom-right"
                      value={gameState[1]}
                      onClick={() => onSquareClicked(1)}
                    />

                    <Square
                      className="b-bottom"
                      value={gameState[2]}
                      onClick={() => onSquareClicked(2)}
                    />
                  </div>
                  <div className="rows jc-center">
                    <Square
                      className="b-bottom-right"
                      value={gameState[3]}
                      onClick={() => onSquareClicked(3)}
                    />
                    <Square
                      className="b-bottom-right"
                      value={gameState[4]}
                      onClick={() => onSquareClicked(4)}
                    />

                    <Square
                      className="b-bottom"
                      value={gameState[5]}
                      onClick={() => onSquareClicked(5)}
                    />
                  </div>
                  <div className="rows jc-center">
                    <Square
                      className="b-right"
                      value={gameState[6]}
                      onClick={() => onSquareClicked(6)}
                    />
                    <Square
                      className="b-right"
                      value={gameState[7]}
                      onClick={() => onSquareClicked(7)}
                    />

                    <Square
                      className="last"
                      value={gameState[8]}
                      onClick={() => onSquareClicked(8)}
                    />
                  </div>
                  <WinningLine line={winningLine} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 socreside">
              <div className="rside">
                <div className="details" id="details">
                  <div className="p1">
                    <span className="plname1">Player 1</span>

                    <input
                      type="text"
                      onChange={(e) => {
                        setPlayer1({ ...player1, name: e.target.value });
                      }}
                      value={player1.name}
                    />
                    <select
                      className="sele"
                      onChange={onSelectChange}
                      value={player1.symbol}
                    >
                      <option value="O">O</option>
                      <option value="X">X</option>
                    </select>

                    {/* <button onClick={handleDoneClick}>Done</button> */}
                  </div>
                  <div className="p2">
                    <span className="plname2">Player 2</span>

                    <input
                      type="text"
                      onChange={(e) => {
                        setPlayer2({ ...player2, name: e.target.value });
                      }}
                      value={player2.name}
                    />
                    <span className="spl2"> {player2.symbol}</span>

                    {/* <button onClick={handleDoneClick2}>Done</button> */}
                  </div>
                </div>
                <div className="two button">
                  <div
                    className="start"
                    id="start"
                    // {...(player1.name && player2.name
                    //   ? { enable: true }
                    //   : { disabled: true })}
                    onClick={() => onstartclicked()}
                  >
                    {" "}
                    Start Game
                  </div>
                  <button
                    className="clear"
                    onClick={() => setGameState(initialState)}
                  >
                    Clear Game
                  </button>

                  <button className="restart" onClick={() => onResetclicked()}>
                    {" "}
                    Reset Game
                  </button>
                </div>
                <div className="tablehistory">
                  <table className="table table-bordered">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">
                          Player1:{player1 ? player1.name : ""}
                        </th>
                        <th scope="col">
                          Player2:{player2 ? player2.name : ""}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{player1.symbol === "X" ? scores.X : scores.O}</td>

                        <td>{player2.symbol === "X" ? scores.X : scores.O}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="sideturn">
                <h1 id="xturn" style={{ display: "none" }}>
                  X's Turn{" "}
                </h1>
                <h1 id="Oturn" style={{ display: "none" }}>
                  O's Turn
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
export default Tic;
