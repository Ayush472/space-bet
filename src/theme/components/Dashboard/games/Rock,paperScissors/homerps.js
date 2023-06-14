import "./../../../../assets/css/Dashboard/rps game/rpshome.css"
import SideNavbar from "../../../SideNavbar";
import Navbar from "../../NavBar";
import { useNavigate } from "react-router-dom";
function Rpshome() {
    const navigate = useNavigate();
  const pvscom = () => {
    // document.getElementById("wrapper").style.display = "block";
    // document.getElementById("rocpepsic").style.display = "none";
    // document.getElementById("twobtnw").style.visibility = "hidden";
    navigate("/player-vs-computer");

  };
  const pvp =()=>{
    navigate("/rpspvp");
  }
  return (
    <>
      <Navbar />
      <div className="row" style={{ overflow: "hidden" }}>
        <div className="col-lg-1 ">
          <SideNavbar />
        </div>
        <div className="col-lg-11">
          <div className="rpsh1">
            <div className="player">
              <button className="pvc" onClick={() => pvscom()}>Player Vs Computer</button>
              <button className="pvc1" onClick={()=>pvp()}>Player VS Player</button>
              <div className="computer"><div className="twobtnw" id="twobtnw">

                <button    className="pvc"  >Player Vs Computer</button>
                <button className="pvc1"  >Player Vs Player</button>
              </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rpshome;
