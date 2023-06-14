import React from "react";
import "./../../../../../assets/css/Dashboard/rps game/rps multiplayer/scoreboard.css"


export default function Scoreboard({ playerOne, playerTwo }) {

    return (
<>
<div className={ playerOne || playerTwo ? "scoreboard active" : "scoreboard" }>
    <div className="players">
        <div className="player">
            <span className="name">{playerOne?.name || "Waiting..."}</span>
            <span className="score1">{playerOne?.score || "0" }</span>
        </div>
        <div className="player">
            <span className="name">
                {playerTwo?.name||"Waiting"}
            </span>
            <span className="score1">{playerTwo?.score||"0"}</span>
        </div>
    </div>
</div>
{/* <div className={[style, playerOne || playerTwo ? style.active : ""].join(" ")}>
            <div className={style.players}>
                <div className={style.player}>
                    <span className={style.name}>{playerOne?.name || "Waiting..."}</span>
                    <span className={style.score}>{playerOne?.score || "0"}</span>
                </div>
                <div className={style.player}>
                    <span className={style.name}>{playerTwo?.name || "Waiting..."}</span>
                    <span className={style.score}>{playerTwo?.score || "0"}</span>
                </div>
            </div>
        </div> */}
        </>
    );
}