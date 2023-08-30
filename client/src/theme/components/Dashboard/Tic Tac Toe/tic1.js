import React from "react";
import { useState } from "react";
import "./../../../assets/css/Dashboard/tic tac toe/menu.css"
import Navbar from "../NavBar";
import SideNavbar from "../../SideNavbar";
import { socket } from "../games/Rock,paperScissors/multiplayer/context/socket";
export default function Test({ createGameCallBack, active = true }) {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const onSelectChange = (e) => {
    setPlayer1({
      ...player1,
      symbol: e.target.value,
    });
  };
  function createRoom(pname) {
    if (name === "") {
      alert("Please Enter The Name ");
    } else {
    //   createGameCallBack(true);
    //   socket.emit("create-room", pname);
    }
  }

  function joinRoom(input, pname) {
    if (name === "") {
      alert("Please Enter The Name ");
    } else {
    //   createGameCallBack(true);

    //   socket.emit("join-room", input, pname);
    }
  }
  const [player1, setPlayer1] = useState({
    name: "",
    symbol: "O",
  });
  return (
    <>
      <Navbar />
      <div className="row" style={{ overflow: "hidden" }}>
        <div className="col-lg-1 ">
          <SideNavbar />
        </div>
        <div className="col-lg-11">
          <div className="row">
            <div className="col-lg-8  gamemain"></div>
            <div className="col-lg-4 socreside">
              <div className="menu">
                <div className="title1">
                  <span className="Tic1">tic</span>
                  <span className="Tac1">tac</span>
                  <span className="Toe1">toe</span>
                </div>

                <div className="options">
                  <label htmlFor="name">NAME</label>
                  <input
                    className="input"
                    id="name"
                    placeholder="AYUSH PATEL"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                    type="text"
                    autoComplete="off"
                  />
 <select
                      className="sele"
                      onChange={onSelectChange}
                      value={player1.symbol}
                    >
                      <option value="O">O</option>
                      <option value="X">X</option>
                    </select>
                  <button className="pvbutton" onClick={() => createRoom(name)}>
                    Create Game
                  </button>

                  <label htmlFor="code">JOIN GAME</label>

                  <div className="join">
                    <input
                      className="input"
                      id="code"
                      style={{ textTransform: "uppercase" }}
                      placeholder="Game Code"
                      value={code}
                      onInput={(e) => setCode(e.target.value)}
                      type="text"
                      autoComplete="off"
                    />
                    <button
                      className="pvbutton"
                      onClick={() => joinRoom(code.toUpperCase(), name)}
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
