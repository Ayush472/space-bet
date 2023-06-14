import React, { useEffect, useState, useCallback } from "react";
import { socket } from "./context/socket";

import "./../../../../../assets/css/Dashboard/rps game/rps multiplayer/gamepage.css";
import Errors from "./error";
import Hand from "./hand";
import Scoreboard from "./scoreboard";
import Roomcode from "./Roomcode";
import Results from "./Results";
import Picker from "./picker";
import Menu from "./menu";
// import "./css/global.css";

export default function PvsPGame() {
  const [players, setPlayers] = useState({ players: {} });
  const [winner, setWinner] = useState(false);
  const [room, setRoom] = useState("");
  const [color, setColor] = useState(undefined);

  const path = window.location.pathname.replace(/^.+\//, "");

  useEffect(() => {
    alert("hii ayush");
    socket.on("players", (playerData, room) => {
      setPlayers(playerData);
      setRoom(room);
      
      window.history.replaceState("", "", room);
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

  useEffect(() => {
    console.log("ayush");
    console.log(players);
    console.log(room);
  }, [players,room]);



  let playerOne, playerTwo;

  if (Object.keys(players.players).length >= 1) {
    playerOne = Object.entries(players.players)[0][1];
    console.log(playerOne);

    if (Object.keys(players.players).length === 2) {
      playerTwo = Object.entries(players.players)[1][1];
    }
  }

  const callback = useCallback((colors) => {
    setColor(colors);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-lg-8" style={{color:"red"}}>
          <div className="tpvd">
            <div className="background">
              <div className="pattern"></div>
              <div className="pattern"></div>
              <div className="pattern"></div>
            </div>
            <Results winner={winner} draw={winner === "draw" ? true : false} />

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

            <Picker color={color} active={winner} />

            <Errors />
          </div>
        </div>
        <div className="col-lg-4"  style={{color:"blue"}}>
          <Menu
            parentCallback={callback}
            active={room ? false : true}
            path={path}
          />
        </div>
      </div>
    </>
  );
}
