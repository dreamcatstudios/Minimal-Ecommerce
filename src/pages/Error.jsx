import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Error = () => {
  return (
    <>
      <Navbar />
      <div class="image-container">
        <div class="text">
          <h1>404</h1>
        </div>
        <i class="ph-flying-saucer sticker"></i>
        <div class="content">
          <h2>Oops!</h2>
          <p>Are you lost in space?</p>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <button className="error-button">Back To Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
