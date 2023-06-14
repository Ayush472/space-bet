import React from "react";
import "./../../../../../assets/css/Dashboard/rps game/rps multiplayer/hand.css"


export default function Hand({ type = "rock", left, color = "yellow", active, moving = false }) {

    let activeHand = left ? "activeLeft" : "activeRight";

    return (
        <div className="hand1">
            <img className={[
                left ? "image playerOne" : "image playerTwo",
                moving ? "image moving" : "",
                active ? "" : activeHand,
            ].join(" ")}
                src={require(`./../../../../../assets/images/Game Image/rps game/multip//${color}-${type ? type : 'rock'}.png`)} alt="hand" />
        </div>
    );
}