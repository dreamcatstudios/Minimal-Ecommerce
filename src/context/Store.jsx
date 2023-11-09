import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";

const StoreContext = createContext();

function StoreProvider({ children }) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const URL =
    "https://minimal-ecommerce-26cd6-default-rtdb.firebaseio.com/.json";

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      const resData = response.data;
      setData(resData);
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

  return (
    <StoreContext.Provider value={{ data, error }}>
      {children}
    </StoreContext.Provider>
  );
}

// Custom Hook
const useGlobalStore = () => {
  return useContext(StoreContext);
};

export { useGlobalStore, StoreProvider, StoreContext };
