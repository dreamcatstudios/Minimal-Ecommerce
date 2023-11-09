import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Trending from "../components/Trending";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Trending />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Homepage;
