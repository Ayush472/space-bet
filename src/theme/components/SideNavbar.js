import React from "react";
import "./../assets/css/navbar.css";
import { FaAward } from "react-icons/fa";
import { Link} from "react-router-dom";
import { MdCasino } from "react-icons/md";
import { BiRun } from "react-icons/bi";
import { MdOutlineSportsEsports } from "react-icons/md";
import { IoLogoBuffer } from "react-icons/io";
const SideNavbar = () => {
  return (
    <div className="side-nav-continer" >
          <ul className="navbar-nav mr-auto" style={{ height:"100vh" }}>
            
            <Link className="nav-link flex-icons text-center" to={"/"}>
              <MdCasino size={35} />
              <br />
             <span> Casino</span>
            </Link>
            <Link className="nav-link flex-icons text-center" to={"/"}>
              <BiRun size={35} />
              <br />
             <span> Sports</span>
            </Link>
            <Link className="nav-link flex-icons text-center" to={"/"}>
              <MdOutlineSportsEsports size={35} />
              <br />
             <span> Esports</span>
            </Link>
            <Link className="nav-link flex-icons text-center" to={"/"}>
              <IoLogoBuffer size={35} />
              <br />
             <span> Pramotions</span>
            </Link>
            <Link className="nav-link flex-icons text-center" to={"/"}>
              <FaAward size={35} />
              <br />
             <span> Rewards</span>
            </Link>
          </ul>
    </div>
  );
};

export default SideNavbar;
