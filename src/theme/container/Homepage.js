import React from "react";
import Navbar from "../components/Dashboard/NavBar";
import SideNavbar from "../components/SideNavbar";
import Home from "../components/Dashboard/home";
function Homepage() {
  return (
    <>
      <Navbar/>
      <Home/>
      <SideNavbar/>
    </>
  );
}

export default Homepage;