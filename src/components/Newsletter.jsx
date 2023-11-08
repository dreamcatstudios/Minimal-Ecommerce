import React from "react";
import "./Newletter.css";

const Newsletter = () => {
  return (
    <div className="news">
      <h1>Newsletter</h1>
      <form className="news-content">
        <input type="email" placeholder="your@email.com" name="" id="" />
        <button>Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
