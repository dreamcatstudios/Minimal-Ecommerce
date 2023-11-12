import React, { useEffect, useState } from "react";
import "./ProductInfo.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { useParams } from "react-router-dom";
import { useGlobalStore } from "../context/Store";
import { Alert, Snackbar } from "@mui/material";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
} from "react-scroll";

const ProductInfo = () => {
  const [state, setState] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setState(false);
  };

  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [showError, setShowError] = useState(false);
  const { productId } = useParams();
  const { data, addCart, handleLastProduct } = useGlobalStore();

  const onHoverImg = (e) => {
    setImage(e);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addToCartHandler = (item) => {
    if (quantity <= 0) {
      setMessage("Quantity cannot be zero ‼️");
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    } else {
      setMessage("Your item has been added to the cart 🛒😄‼️");
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      addCart(item);
    }
  };

  useEffect(() => {
    scrollToTop();
    data[productId - 1].img && setImage(data[productId - 1].img);
    // handleLastProduct(productId);
  }, []);

  return (
    <>
      <Navbar />
      {data?.map((item) =>
        item.id == productId ? (
          <div key={item.id} className="container product-info">
            <h1 className="product-info-heading">{item.description}</h1>
            <div className="product-page-grid">
              <div className="left-grid">
                <img className="large-image" src={image} alt="" />
                <div className="small-images">
                  <div
                    onClick={() => onHoverImg(item.img)}
                    onMouseEnter={() => onHoverImg(item.img)}
                  >
                    <img src={item.img} alt="alt-images" />
                  </div>
                  {item?.otherImgs?.map((img, index) => (
                    <div
                      onClick={() => onHoverImg(img)}
                      onMouseEnter={() => onHoverImg(img)}
                      key={index}
                    >
                      <img src={img} alt="alt-images" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="gray-grid">
                <p>{item.specs}</p>
                <div className="flex quantity">
                  <h1>Quantity</h1>
                  <button onClick={decrease}>-</button>
                  <div className="quantity-number">{quantity}</div>
                  <button onClick={increase}>+</button>
                  <h1>$1.00</h1>
                </div>
                <div className="flex cart">
                  <button
                    onClick={() =>
                      addToCartHandler({
                        name: item.description,
                        price: item.price,
                        img: item.img,
                        quantity: quantity,
                      })
                    }
                  >
                    ADD TO CART
                  </button>
                  <button>BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          null
        )
      )}

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showError}
        autoHideDuration={3000}
        message={message}
        onClose={handleClose}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#fff",
            color: "#000",
            border: "0.2px solid rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            fontSize: "16px",
          },
        }}
      />

      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductInfo;
