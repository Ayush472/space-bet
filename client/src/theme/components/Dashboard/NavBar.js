import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../../assets/css/Dashboard/navbar_dashboard.css";
// import { MdCasino } from "react-icons/md";
// import { BiRun } from "react-icons/bi";
// import { MdOutlineSportsEsports } from "react-icons/md";
// import { IoLogoBuffer } from "react-icons/io";
// import { FaAward } from "react-icons/fa";
import logo from "./../../assets/images/fulllogo.png"

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch("http://192.168.74.5/logout", {
      method: "get",
    })
      .then(
        localStorage.removeItem("userData"),
        localStorage.removeItem("Register")
      )
      .then(navigate("/"));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="">
        <div>
          <Link className="navbar-brand">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>

      {/* <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <Link className="nav-link flex-icons casino" to={"/comingsoon"}>
            <MdCasino size={30} />
            Casino
          </Link>
          <Link className="nav-link flex-icons sports" to={"/comingsoon"}>
            <BiRun size={30} />
            Sports
          </Link>
          <Link className="nav-link flex-icons" to={"/comingsoon"}>
            <MdOutlineSportsEsports size={30} />
            Esports
          </Link>
          <Link className="nav-link flex-icons" to={"/comingsoon"}>
            <IoLogoBuffer size={30} />
            Pramotions
          </Link>
          <Link className="nav-link flex-icons" to={"/comingsoon"}>
            <FaAward size={30} />
            Rewards
          </Link>
        </ul>
      </div> */}
      <div className="d-flex flex-row">
   
      <button
        type="button"
        onClick={() => {
          handleLogout();
        }}
        className="nav-link nav-item sign-btn"
      >
        Logout
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      </div>
     
    </nav>
  );
}

export default Navbar;
