import React, { useEffect } from "react";
import "./ProductInfo.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { useParams } from "react-router-dom";
import { useGlobalStore } from "../context/Store";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
} from "react-scroll";

const ProductInfo = () => {
  const { productId } = useParams();

  const { data } = useGlobalStore();
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  console.log(productId);
  return (
    <>
      <Navbar />
      {data?.map((item, index) =>
        item.id == productId ? (
          <div key={index} className="container product-info">
            <h1 className="product-info-heading">{item.description}</h1>
            <div className="product-page-grid">
              <div>
                <img src={item.img} alt="" />
              </div>
              <div className="gray-grid">
                <p>{item.specs}</p>
                <div className="flex quantity">
                  <h1>Quantity</h1>
                  <button>-</button>
                  <div>1</div>
                  <button>+</button>
                  <h1>$1.00</h1>
                </div>
                <div className="flex cart">
                  <button>ADD TO CART</button>
                  <button>BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}

      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductInfo;
