import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";

const StoreContext = createContext();

function StoreProvider({ children }) {
  // Initialize state values with localStorage values if available
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || null
  );
  const [error, setError] = useState(null);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [
      { id: 1, quantity: 1, price: 0, title: "", img: "" },
    ]
  );

  const [totalPrice, setTotalPrice] = useState(0);

  const [lastProduct, setLastProduct] = useState(1);

  const addCart = (products) => {
    setCart((prevCart) => [...prevCart, products]);
  };

  const handleLastProduct = (item) => {
    setCart(item);
  };

  const increaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item === product ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item === product
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
          }
        : item
    );
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    console.log("id: ", id);
    const updatedCart = cart.filter((_, index) => index != id);
    setCart(updatedCart);
  };

  const totalPriceHandler = () => {
    let price = 0;
    if (cart.length === 0) {
      setTotalPrice(0);
    } else {
      cart.forEach((item) => {
        price += item.price * item.quantity;
      });
      setTotalPrice(price);
    }
  };

  const URL =
    "https://minimal-ecommerce-26cd6-default-rtdb.firebaseio.com/.json";

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      const resData = response.data;
      setData(resData);
      // Update localStorage with the new data
      localStorage.setItem("data", JSON.stringify(resData));
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(URL);
  }, []);

  useEffect(() => {
    console.log("data: ", data);
  }, [data]);

  useEffect(() => {
    console.log("cart: ", cart);
    totalPriceHandler();
    // Update localStorage with the new cart state
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <StoreContext.Provider
      value={{
        data,
        error,
        cart,
        addCart,
        removeItem,
        totalPrice,
        increaseQuantity,
        decreaseQuantity,
        handleLastProduct,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

// Custom Hook
const useGlobalStore = () => {
  return useContext(StoreContext);
};

export { useGlobalStore, StoreProvider, StoreContext };
