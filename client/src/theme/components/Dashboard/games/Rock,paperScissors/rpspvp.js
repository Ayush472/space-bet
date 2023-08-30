import React, { useEffect, useState, useCallback } from "react";
import { socket } from "./multiplayer/context/socket";

import Navbar from "../../NavBar";
import SideNavbar from "../../../SideNavbar";
import "./../../../../assets/css/Dashboard/rps game/rps multiplayer/rpspvp.css";
import Menu from "./multiplayer/menu";
import Errors from "./multiplayer/error";
import Hand from "./multiplayer/hand";
import Roomcode from "./multiplayer/Roomcode";
import Picker from "./multiplayer/picker";
import Results from "./multiplayer/Results";
import Scoreboard from "./multiplayer/scoreboard";
const Pvsp = () => {
  const [players, setPlayers] = useState({ players: {} });
  const [winner, setWinner] = useState(false);
  const [room, setRoom] = useState("");
  const [color, setColor] = useState(undefined);
  const [gameStatus, setGameStatus] = useState(false)



  useEffect(() => {
    
    console.log("=player",players)
    socket.on("players", (playerData, room) => {
      setPlayers(playerData);
      setRoom(room);
      // window.history.replaceState("", "", room);
    });

    socket.on("rps-winner", (gameWinner) => {
      setTimeout(() => {
        setWinner(gameWinner);
        setTimeout(() => {
          setWinner(false);
          socket.emit("rps-reset");
        }, 3000);
      }, 3000);
    });
  }, []);

  let playerOne, playerTwo;

  if (Object.keys(players.players).length >= 1) {
    playerOne = Object.entries(players.players)[0][1];

    if (Object.keys(players.players).length === 2) {
      playerTwo = Object.entries(players.players)[1][1];
    }
  }

  const setColorCallBack = useCallback((colors) => {
    setColor(colors);
  }, []);

  const cgCallBack = (isGameCreated) => {
    setGameStatus(isGameCreated)
  }

  return (
    <>
      <Navbar />
      <div className="row" style={{ overflow: "hidden" }}>
        <div className="col-lg-1 rpsmside ">
          <SideNavbar />
        </div>
        <div className="col-lg-11">
          <div className="row">
            <div className="col-lg-8 chhand">
              <Results
                winner={winner}
                draw={winner === "draw" ? true : false}
              />

              <Roomcode code={room} />
              <Scoreboard playerOne={playerOne} playerTwo={playerTwo} />

              <div className="hands1">
                <Hand
                  left={true}
                  color={playerOne?.color}
                  type={winner ? playerOne?.choice : "rock"}
                  active={playerOne?.choice ? true : false}
                  moving={
                    playerOne?.choice && playerTwo?.choice
                      ? winner
                        ? false
                        : true
                      : false
                  }
                />
                <Hand
                  left={false}
                  color={playerTwo?.color}
                  type={winner ? playerTwo?.choice : "rock"}
                  active={playerTwo?.choice ? true : false}
                  moving={
                    playerOne?.choice && playerTwo?.choice
                      ? winner
                        ? false
                        : true
                      : false
                  }
                />
              </div>

              <Picker color={color} active={winner} gameStatus={gameStatus} />

              <Errors />
            </div>
            <div className="col-lg-4 proom">
              <Menu
                parentCallback={setColorCallBack}
                createGameCallBack={cgCallBack}
                active={room ? false : true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pvsp;
