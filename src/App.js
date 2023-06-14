import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./theme/components/Navbar";
import Navbar from "./theme/components/Dashboard/NavBar";
import Mainpage from "./theme/components/Mainpage";
// import Popup from "./theme/container/Homepage";
import React from "react";
// import "./App.css";
import Home from "./theme/container/Homepage";
import "./theme/assets/css/App.css";
import Tic from "./theme/components/Dashboard/games/tic";
// import Tictoe from "./theme/container/Homepage";
import TicTacToe from "./theme/container/Homepage";
import Index from "./theme/container/Index";
import Homepage from "./theme/container/Homepage";
import Rps from "./theme/components/Dashboard/games/Rock,paperScissors";
import Rpshome from "./theme/components/Dashboard/games/Rock,paperScissors/homerps";
import GameBoard from "./theme/components/Dashboard/games/Rock,paperScissors/rpspvp";
import Pvsp from "./theme/components/Dashboard/games/Rock,paperScissors/rpspvp";
import P1vsp2 from "./theme/components/Dashboard/games/Rock,paperScissors/rpspvp";
import Test from "./theme/components/Dashboard/Tic Tac Toe/tic1";
import Computer from "./theme/components/Dashboard/games/Rock,paperScissors/computer/computer";
import SnakeGame from "./theme/components/Dashboard/games/snake and ladder/game";
import Tesing from "./theme/components/Dashboard/games/snake and ladder/test1";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Index />} />
          <Route path="/" element={<Index />} />

          <Route path="/test" element={<Test />}></Route>

          {/* <Route exact path='/pop' element={<Popup/>}></Route> */}
          <Route exact path="/tic" element={<Tic />}></Route>
          <Route exact path="/tictactoe" element={<TicTacToe />}></Route>
          {/* <Route exact path='/Tictoe' element={<Tictoe/>}></Route> */}
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/rps" element={<Rps />} />
          <Route path="/rpshome" element={<Rpshome />} />
          <Route path="/rpspvp" element={<Pvsp />} />
          <Route path="/game" element={<GameBoard />} />
          <Route path="/p1vsp2" element={<P1vsp2 />} />
          <Route path="/player-vs-computer" element={<Computer />} />
          <Route path="/snake-and-ladder" element={<SnakeGame />} />
          <Route path="/ayush" element={<Tesing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
