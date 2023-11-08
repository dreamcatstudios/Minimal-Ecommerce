import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="grid-1 ">
        <h1>Live Comfortably</h1>
      </div>
      <div className="grid-2">
        <h1>Skincare</h1>
      </div>
      <div className="grid-3 ">
        <div className="grid-4">
          <h1>Kitchen</h1>
        </div>
        <div className="grid-5">
          <h1>Electronics</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
