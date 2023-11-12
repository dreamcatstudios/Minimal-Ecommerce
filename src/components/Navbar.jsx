import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useGlobalStore } from "../context/Store";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [cartMenu, setCartMenu] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const {
    cart,
    removeItem,
    totalPrice,
    addCart,
    increaseQuantity,
    decreaseQuantity,
  } = useGlobalStore();

  const onMobileClickHandler = () => {
    setMobileMenu(!mobileMenu);
    setOverlay(!overlay);
  };

  const onCartClickHandler = () => {
    setCartMenu(!cartMenu);
    setOverlay(!overlay);
  };

  useEffect(() => {
    console.log("cart: ", cart);
  }, []);

  return (
    <>
      <div className={`mobile-menu ${mobileMenu ? "block" : ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="x-mobile"
          onClick={onMobileClickHandler}
        >
          <path d="M18 6l-12 12"></path>
          <path d="M6 6l12 12"></path>
        </svg>
        <div>
          <a href="categories">Categories</a>
          <a href="/">Home</a>
          <a href="#">Product Page</a>
        </div>
      </div>

      <div className={`dark-overlay ${overlay ? "block" : ""}`}></div>

      <div className={`cart-div ${cartMenu ? "open-cart" : "closed-cart"}`}>
        <div className="cart-title-btn">
          <h2 className="cart-full-h2">{`Your Shopping Cart (${cart.length})`}</h2>
          <svg
            onClick={() => onCartClickHandler()}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-x"
          >
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </div>

        {/* Checkout Page */}
        <div className="cart-body">
          <div className="full-cart-div">
            <di className="full-cart">
              {cart &&
                cart?.map((item, index) => (
                  <div key={index} className="cart-item">
                    <div className="cart-img">
                      <img src={item.img} alt="product" />
                    </div>
                    <div className="cart-middsle">
                      <p className="cart-name">{item.name}</p>
                      <div className="cart-btns">
                        <button onClick={() => decreaseQuantity(item)}>
                          -
                        </button>
                        <p className="quantity">{item.quantity}</p>
                        <button onClick={() => increaseQuantity(item)}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="cart-right">
                      <p className="cart-price">${item.price}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-x"
                        onClick={() => removeItem(cart.indexOf(item))}
                      >
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                      </svg>
                    </div>
                  </div>
                ))}
            </di>
          </div>
          <div className="subtotal-div">
            <div className="sub-right">
              <p>Subtotal</p>
              <p className="total-price">Total: ${totalPrice}</p>
            </div>
            <div className="sub-left">
              <a onClick={null}>Go to Checkout</a>
            </div>
          </div>
        </div>
        {/* Checkout Page */}
      </div>

      <nav>
        <a href="/">
          <img className="logo-img" src="/src/assets/img/newlogo2.png" alt="" />
        </a>

        <div className="nav-links">
          <a href="/categories">categories</a>
          <a href="/product/1">product page</a>

          <i
            onClick={() => onCartClickHandler()}
            data-array-length={cart.length}
            className={`cart-icon ${cart.length > 0 ? "with-items" : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-shopping-cart"
            >
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
          </i>
        </div>

        <div className="hamburger-menu">
          <i
            onClick={() => onCartClickHandler()}
            data-array-length={cart.length}
            className={`cart-icon ${cart.length > 0 ? "with-items" : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-shopping-cart"
            >
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
          </i>

          <i className="hamburger-hamb">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-menu-2"
              onClick={() => onMobileClickHandler()}
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
