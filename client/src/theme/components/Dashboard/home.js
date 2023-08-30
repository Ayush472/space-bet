import React, { useState } from "react";
import "./../../assets/css/mainpage.css";
import val from "./../../assets/images/Game Image/valorant.webp";           
import cry6 from "./../../assets/images/Game Image/cry6.webp";
import dlight from "./../../assets/images/Game Image/dlight.webp";
import GTA from "./../../assets/images/Game Image/GTAV_EGS 5.webp";
import RINGROLL from "./../../assets/images/Game Image/RINGROLL.webp";
import NHRA from "./../../assets/images/Game Image/NHRA.jpg";
import endwar from "./../../assets/images/Game Image/endwar.avif";
// import Anyd from "./card/topcard";
import * as Hi from "react-icons/hi2";
import hor1 from "./../../assets/images/Game Image/hor-1.png";
import hor2 from "./../../assets/images/Game Image/hor-2.png";
import hor3 from "./../../assets/images/Game Image/hor-3.png";
import hor4 from "./../../assets/images/Game Image/hor-4.png";
import hor5 from "./../../assets/images/Game Image/hor-5.png";
import hor6 from "./../../assets/images/Game Image/hor-6.png";
import hor7 from "./../../assets/images/Game Image/hor-7.png";
import hor8 from "./../../assets/images/Game Image/hor-8.jpg";
import hor9 from "./../../assets/images/Game Image/hor-9.png";
import tic from "./../../assets/images/Game Image/tic tac toe.jpg"
import rps from "./../../assets/images/Game Image/Rps.jpg"
import ItemsCarousel from "react-items-carousel";
import SideNavbar from "./../SideNavbar";
import { Link } from "react-router-dom";
// "valorant.webp";
const Home = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const [secondCarousel, setSecondCarousel] = useState(0);
  const secondWidth = 40;
  return (
    <>
      <div className="row" style={{ overflow: "hidden" }}>
        <div className="col-lg-1 ">
          <SideNavbar />
        </div>
        <div className="col-lg-11">
          <section className="fPage">
            <div className="feature mt-4">
              <div className="header ">
                <h4><b> Feature Game </b></h4>
                <ItemsCarousel
                  infiniteLoop={true}
                  requestToChangeActive={setSecondCarousel}
                  activeItemIndex={secondCarousel}
                  numberOfCards={4}
                  gutter={20}
                  leftChevron={
                    <Hi.HiArrowLongLeft size={35}>{"<"}</Hi.HiArrowLongLeft>
                  }
                  rightChevron={
                    <Hi.HiArrowLongRight size={35}>{">"}</Hi.HiArrowLongRight>
                  }
                  outsideChevron
                  chevronWidth={secondWidth}
                >
                  <Link  className="main-card second-carousel"  to={"/tic"}>
                    <img src={tic} alt="val" />
                    <div className="main-card-details">
                      <h4>Tic Tac Toe</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </Link>
                  <Link className="main-card second-carousel" to={"/rpshome"}>
                    <img src={rps} alt="val" />
                    <div className="main-card-details">
                      <h4>Rock Paper Scissors</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </Link>
                  <div className="main-card second-carousel">
                    <img src={hor3} alt="val" />
                    <div className="main-card-details">
                      <h4>Snake And Ladder </h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="main-card second-carousel">
                    <img src={hor4} alt="val" />
                    <div className="main-card-details">
                      <h4>EndWar</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="main-card second-carousel">
                    <img src={hor5} alt="val" />
                    <div className="main-card-details">
                      <h4>NHRA</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="main-card second-carousel">
                    <img src={hor6} alt="val" />
                    <div className="main-card-details">
                      <h4>CRY6</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="main-card second-carousel">
                    <img src={hor7} alt="val" />
                    <div className="main-card-details">
                      <h4>Dlight</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="main-card second-carousel">
                    <img src={hor8} alt="val" />
                    <div className="main-card-details">
                      <h4>Dlight</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="main-card second-carousel">
                    <img src={hor9} alt="val" />
                    <div className="main-card-details">
                      <h4>Dlight</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                </ItemsCarousel>
                
              </div>
              {/* <div className="header">
              <h4> Center</h4>
              <Anyd />
            </div> */}
              <div className="header mt-4">
                <h4><b>Recently Played</b></h4>
                <ItemsCarousel
                  infiniteLoop={true}
                  requestToChangeActive={setActiveItemIndex}
                  activeItemIndex={activeItemIndex}
                  numberOfCards={7}
                  gutter={20}
                  leftChevron={
                    <Hi.HiArrowLongLeft size={35}>{"<"}</Hi.HiArrowLongLeft>
                  }
                  rightChevron={
                    <Hi.HiArrowLongRight size={35}>{">"}</Hi.HiArrowLongRight>
                  }
                  outsideChevron
                  chevronWidth={chevronWidth}
                >
                  <div className="main-card">
                    <img src={RINGROLL} alt="val" />
                    <div className="main-card-details">
                      <h4>Ringroll</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="main-card">
                    <img src={GTA} alt="val" />
                    <div className="main-card-details">
                      <h4>GTA</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="main-card">
                    <img src={val} alt="val" />
                    <div className="main-card-details">
                      <h4>Velorent</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="main-card">
                    <img src={endwar} alt="val" />
                    <div className="main-card-details">
                      <h4>EndWar</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="main-card">
                    <img src={NHRA} alt="val" />
                    <div className="main-card-details">
                      <h4>NHRA</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="main-card">
                    <img src={cry6} alt="val" />
                    <div className="main-card-details">
                      <h4>CRY6</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="main-card">
                    <img src={dlight} alt="val" />
                    <div className="main-card-details">
                      <h4>Dlight</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="main-card">
                    <img src={dlight} alt="val" />
                    <div className="main-card-details">
                      <h4>Dlight</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                </ItemsCarousel>
              </div>
              {/* <h2>1</h2> */}
            </div>

            <div className="header feature mt-4">
              <h4><b> Tournaments & Events </b></h4>
              <div className="foruth-section d-flex flex-row">
                <div className="main-card second-carousel">
                  <img src={hor1} alt="val" />
                  <div className="main-card-details">
                    <h4>Ringroll</h4>
                    <p>Lorem ipsum dolor</p>
                  </div>
                </div>
                <div className="main-card second-carousel">
                  <img src={hor2} alt="val" />
                  <div className="main-card-details">
                    <h4>GTA</h4>
                    <p>Lorem ipsum dolor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="foruth-section d-flex flex-row main-heghit-problem header feature mt-3">
                <div className="main-card second-carousel">
                  <img src={hor1} alt="val" />
                  <div className="main-card-details">
                    <h4>Ringroll</h4>
                    <p>Lorem ipsum dolor</p>
                  </div>
                </div>
                <div className="main-card second-carousel">
                  <img src={hor2} alt="val" />
                  <div className="main-card-details">
                    <h4>GTA</h4>
                    <p>Lorem ipsum dolor</p>
                  </div>
                </div>
              </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
