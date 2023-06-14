import React from 'react';
import "./../../../../assets/css/Dashboard/rps game/hand.css"
import Paper from './../../../../assets/images/Game Image/rps game/Paper.png';
import Scissors from './../../../../assets/images/Game Image/rps game/Scissors.png';
import Rock from './../../../../assets/images/Game Image/rps game/Rock.png';
import './main';
import pickUserHand from './main';
import {restartGame} from './main';

function Hands() {
    return (
        <div>
            <div className="hands">
                <div className="hand paper">
                    <img src={Paper} alt="paper-hand" onClick={()=>{pickUserHand('paper')}}/>
                </div>
                <div className="hand scissors">
                    <img src={Scissors} alt="scissors-hand" onClick={()=>{pickUserHand('scissors')}}/>
                </div>
                <div className="hand rock">
                    <img src={Rock} alt="rock-hand" onClick={()=>{pickUserHand('rock')}}/>
                </div>
            </div>
            <div className="contest">
                <div className="userhand">
                    <h1>YOU PICKED</h1>
                    <div className="handImageContainer">
                        <img id="userPickImage" src={Paper} alt="paper-hand" />
                    </div>
                </div>
                <div className="referee">
                    <div className="descission">
                        <h1>YOU WIN</h1>
                    </div>
                    <div className="NewGame" onClick={()=>restartGame()} >PLAY AGAIN</div>
                </div>
                <div className="computerhand">
                <h1>THE HOUSE PICKED</h1>
                    <div className="handImageContainer">
                        <img id="computerPickImage" src={Rock} alt="rock-hand" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hands
