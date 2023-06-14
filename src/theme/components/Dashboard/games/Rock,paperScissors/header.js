import React from 'react';
import TitleImage from './../../../../assets/images/Game Image/rps game/TitleImage.png'
import "./../../../../assets/css/Dashboard/rps game/header.css"
function Header() {
    return (
            <div className="score-board">
                <div className="title">
                    <img src={TitleImage} alt="title" />
                </div>
                <div className="score">
                    <p>SCORE</p>
                    <h1>0</h1>
                </div>
            </div>
    )
}

export default Header;