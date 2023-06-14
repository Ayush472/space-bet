import React from "react";
import { useState } from "react";
import "./../../../../../assets/css/Dashboard/rps game/rps multiplayer/menu.css"


export default function Menu({ parentCallback,nameCallback, createGameCallBack, active = true }) {

    const [name, setName] = useState("");
    const [chosenColor, setChosenColor] = useState({ "yellow": "#D3B542" });

    function Startgame() {
        if (name==="") {
            alert("Please Enter The Name ")
        }
        else{
            createGameCallBack(true)
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
                    onClick={() => {  nameCallback(name)
                        Startgame(name, Object.keys(chosenColor)[0])}}
                >
                   Start Game
                </button>
            </div>
        </div>
    );
}
