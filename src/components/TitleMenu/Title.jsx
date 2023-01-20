import React from "react";
import "./title.css";
const Title = ({ text }) => {
  return (
    <div className="typewriter">
      <h1>{text}</h1>
    </div>
  );
};

export default Title;
