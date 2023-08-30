import React, { useState } from "react";
import "./../../../../assets/css/Dashboard/game/snake and ladder/register.css"



const SnakeGameMenu =(props)=>{
    const [name,setName]=useState("");
    return(
        <>
            <div className="snakemenu">
                <div className="snaketitle">
                  <span className="sanketi">Snake</span>
                  <span className="andti">And</span>
                  <span className="ladderti">Ladder</span>
                </div>
                <div className="snake-Input-name">
                  <label htmlFor="name">Name</label>
                  <input className="input"
                  id="name" 
                  placeholder="NAME"
                  value={name} 
                    onInput={ (e) => setName(e.target.value) } type="text"
                    autoComplete="off"
                  />
                </div>
                <div>
                  {
                    props.turn ?
                    <div>User's Turn</div>
                    :
                    <div>Computer's Turn</div>
                  }
                </div>
                <button className="snake-start-game">
                  Start Game
                </button>
              </div>
        </>
    )



}
export default SnakeGameMenu ;