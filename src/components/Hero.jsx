import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero container">
      <Link style={{ textDecoration: "none" }} to={"/categories/furniture"}>
        <div className="grid-1 ">
          <h1>Live Comfortably</h1>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to={"/categories/skin-care"}>
        <div className="grid-2">
          <h1>Skincare</h1>
        </div>
      </Link>

      <div className="grid-3 ">
        <Link
          style={{ textDecoration: "none" }}
          style={{ width: "100%" }}
          to={"/categories/kitchen"}
        >
          <div className="grid-4">
            <h1>Kitchen</h1>
          </div>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          style={{ width: "100%" }}
          to={"/categories/electronic"}
        >
          <div className="grid-5">
            <h1>Electronics</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
