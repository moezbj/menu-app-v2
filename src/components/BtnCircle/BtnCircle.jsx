import React from "react";
import "./btnCircle.css";

const BtnCircle = ({ icon }) => {
  return (
    <div className="container-btn-circle">
      <img className="icon-container" alt="img" src={icon} />
    </div>
  );
};

export default BtnCircle;
