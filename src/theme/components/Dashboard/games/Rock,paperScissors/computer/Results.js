import React from "react";
import "./../../../../../assets/css/Dashboard/rps game/rps multiplayer/result.css"

export default function Results({ winner, draw }) {

    return (
        <div className="results">
            <div className={ winner ?  "wrapper2 active" : "wrapper2"}>
                {draw ?
                    <div className="text">
                        <span>it's a</span>
                        <span>draw!</span>
                    </div>
                    :
                    <div className="text">
                        <span>{winner.name}</span>
                        <span>won!</span>
                    </div>
                }
            </div>
        </div>
    );
}