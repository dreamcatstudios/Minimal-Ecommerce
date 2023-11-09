import React from "react";
import "./Products.css";
import { useGlobalStore } from "../context/Store";

const Products = () => {
  const { data } = useGlobalStore();

  return (
    <div className="container">
      <h1 className="heading-products">Products we are proud of</h1>
      <div className="grid-products">
        {data?.map((item, index) =>
          index < 8 ? (
            <div key={index} className="products">
              <img className="product-img" src={item.img} alt="" />
              <h3 className="product-name">{item.description}</h3>
              <h1>${item.price}</h1>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Products;
