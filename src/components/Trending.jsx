import React from "react";
import { useGlobalStore } from "../context/Store";
import "./Trending.css";

const Trending = () => {
  const { data } = useGlobalStore();

  return (
    <div className="container">
      <h1 className="heading-products">Trending Now</h1>
      <div className="scroll-products">
        {data
          ?.slice(0, 8)
          .reverse()
          .map((item, index) => (
            <div key={index} className="products-trending">
              <img className="product-img-trending" src={item.img} alt="" />
              <div className="div-bottom">
                <h3 className="product-name-trending">{item.description}</h3>
                <h1>${item.price}</h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Trending;
