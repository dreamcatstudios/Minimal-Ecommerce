import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div>
        <a href="#">About</a>
        <a href="#">Store locator</a>
        <a href="#">FAQs</a>
        <a href="#">News</a>
        <a href="#">Careers</a>
        <a href="#">Contact Us</a>
      </div>
      <p>
        Minimal Ecommerce - ©{currentYear}
        <br></br> by Jatin Bhandari
      </p>
    </footer>
  );
};

export default Footer;
