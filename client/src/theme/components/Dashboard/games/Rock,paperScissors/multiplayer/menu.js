import React from "react";
import { useState } from "react";
import "./../../../../../assets/css/Dashboard/rps game/rps multiplayer/menu.css"
import { socket } from "./context/socket";
import Picker from "./picker";
import { ToastContainer,toast } from "react-toastify";

export default function Menu({ parentCallback, createGameCallBack, active = true }) {

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [chosenColor, setChosenColor] = useState({ "yellow": "#D3B542" });

    function createRoom(pname, pcolor) {
        if (name==="") {
            toast.error("Please Enter The Name ")
        
        }
        else{
            createGameCallBack(true)
            console.log(pname);
            socket.emit("create-room", pname, pcolor);
        }
    }

    function joinRoom(input, pname, pcolor) {
        if (name==="") {
            toast.error("Please Enter The Name ")
        }else{
            createGameCallBack(true)

            socket.emit("join-room", input, pname, pcolor);
        }
    }

    let colors = [
        { "yellow": "#D3B542" },
        { "blue": "#649DB1" },
        { "green": "#9CBB38" },
        { "white": "#BE9C7A" },
        { "darkwhite": "#AF8865" },
        { "lightbrown": "#A47B5B" },
        { "brown": "#8E5937" },
        { "black": "#3C2B22" },
    ];

    return (
        <>
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
        <div className= "menu">

            <div className="title1">
                <span className="rock1">rock</span>
                <span className="paper1">paper</span>
                <span className="scissors1">scissors</span>
            </div>

            <div className="options">
                <label htmlFor="name">NAME</label>
                <input
                    className= "input"
                    id="name"
                    placeholder="JOHN DOE"
                    value={name}
                    onInput={e => setName(e.target.value)} type="text"
                    autoComplete="off"
                />

                <label htmlFor="colors" style={{ marginBottom: "10px" }}>
                    SKIN
                </label>

                <ul className="colorpicker" id="colors">
                    {colors.map((color, index) => {
                        return <li key={index}
                            onClick={() => {
                                setChosenColor(color);
                                parentCallback(Object.keys(color)[0] );
                            }}
                            className={
                            Object.keys(chosenColor)[0] == Object.keys(color)
                                ?  "color active"
                                : "color"
                            }
                            style={{ backgroundColor: Object.values(color) }}
                        />
                    })}
                </ul>

                <button
                    className="pvbutton"
                    style={{ backgroundColor: Object.values(chosenColor) }}
                    onClick={() => createRoom(name, Object.keys(chosenColor)[0])}
                >
                    Create Game
                </button>

                <label htmlFor="code">JOIN GAME</label>

                <div className="join">
                    <input className="input"
                        id="code"
                        style={{ textTransform: "uppercase" }}
                        placeholder="Game Code"
                        value={code}
                        onInput={e => setCode(e.target.value)}
                        type="text"
                        autoComplete="off"
                    />
                    <button
                        className="pvbutton"
                        style={{ backgroundColor: Object.values(chosenColor) }}
                        onClick={
                            () =>
                                joinRoom(
                                    code.toUpperCase(),
                                    name,
                                    Object.keys(chosenColor)[0]
                                )}
                    >
                        Join
                    </button>
                </div>

            </div>
        </div>
        </>

    );
}
