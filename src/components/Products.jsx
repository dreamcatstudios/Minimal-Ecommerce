import React from "react";
import "./Products.css";
import { useGlobalStore } from "../context/Store";
import { Link } from "react-router-dom";

const Products = () => {
  const { data } = useGlobalStore();

  return (
    <div className="container">
      <h1 className="heading-products">Products we are proud of</h1>
      <div className="grid-products">
        {data?.map((item, index) =>
          index < 8 ? (
            <Link
              key={index}
              style={{ textDecoration: "none" }}
              to={`product/${item.id}`}
            >
              <div className="products">
                <img className="product-img" src={item.img} alt="" />
                <h3 className="product-name">{item.description}</h3>
                <h1 className="product-price">${item.price}</h1>
              </div>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Products;
