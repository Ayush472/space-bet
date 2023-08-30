import React from "react";
import "./../../../assets/css/Dashboard/WinningLine.css";

const WinningLine = ({ line }) => {
  const positions = {
    0: {
      top: "calc(40% - 10px)",
      left: "calc(22% - 5px)",
      width: "calc(30% + 0px)",
    },
    1: {
      top: "calc(55% - -5px)",
      left: "calc(25% - 15px)",
      width: "calc(30% + 0px)",
    },
    2: {
      top: "calc(75% - 5px)",
      left: "calc(25% - 12px)",
      width: "calc(30% + 0px)",
    },
    3: {
      top: "calc(30% - -7px)",
      left: "calc(29% - 7px)",
      height: "calc(55% + 0px)",
    },
    4: {
      top: "calc(30% - -7px)",
      left: "calc(40% - 21px)",
      height: "calc(55% + 0px)",
    },
    5: {
      top: "calc(31% - 5px)",
      left: "calc(52% - 5px)",
      height: "calc(56% )",
    },
    6: {
      top: "calc(59% - 5px)",
      left: "calc(15% - 5px)",
      width: "calc(50% )",
      transform: "rotate(45deg)",
    },
    7: {
      top: "calc(60% - 20px)",
      left: "calc(20% + 0px)",
      width: "calc(36% + -2px)",
      transform: "rotate(-45deg)",
    },
  };

  return (
    <div
      className="winning-line"
      style={{ ...positions[line], display: line !== null ? "block" : "none" }}
    />
  );
};

export default WinningLine;
