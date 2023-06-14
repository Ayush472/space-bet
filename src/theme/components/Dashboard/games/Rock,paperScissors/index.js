import "./../../../../assets/css/Dashboard/rps game/index.css"
import Header from './header.js';
import Hands from './hand.js';
import SideNavbar from "../../../SideNavbar";
import "./../../../../assets/css/Dashboard/rps game/index.css";
import Navbar from "../../NavBar";
import Paper from "./../../../../assets/images/Game Image/rps game/Paper.png";
import Scissors from "./../../../../assets/images/Game Image/rps game/Scissors.png";
import Rock from "./../../../../assets/images/Game Image/rps game/Rock.png";
function Rps() {
  return (<>
  <Navbar/>
  <div className="row" style={{ overflow: "hidden" }}>
    <div className="col-lg-1 ">
      <SideNavbar />
    </div>
    <div className="col-lg-11">
      <div className="rps">
        
       
        <div className="wrapper" id="wrapper">
          <Header />
          <Hands />
        </div>
      </div>
    </div>
  </div></>
  );
}

export default Rps;