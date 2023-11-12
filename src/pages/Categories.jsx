import React, { useState, useEffect } from "react";
import "./Categories.css";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useGlobalStore } from "../context/Store";
import { useParams } from "react-router-dom";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
} from "react-scroll";

const Categories = () => {
  const { data } = useGlobalStore();
  const { filter } = useParams();

  const [categories, setCategories] = useState(data);

  const filterCategory = (name) => {
    if (name === "all") {
      setCategories(data);
    } else {
      const updatedData = data.filter((item) => item.category === name);
      setCategories(updatedData);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    scrollToTop();
    if (filter?.length === undefined) {
      filterCategory("all");
    } else {
      console.log(filter?.length);
      filterCategory(filter);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div class="title-home">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-chevron-left"
            >
              <path d="M15 6l-6 6l6 6"></path>
            </svg>{" "}
            Home
          </a>
          <h3>All</h3>
        </div>
        <div class="filter-btns">
          <a onClick={() => filterCategory("all")}>
            <button>All</button>
          </a>
          <a onClick={() => filterCategory("furniture")}>
            <button>Furnitures</button>
          </a>
          <a onClick={() => filterCategory("electronic")}>
            <button>Electronics</button>
          </a>
          <a onClick={() => filterCategory("lamp")}>
            <button>Lamps</button>
          </a>
          <a onClick={() => filterCategory("kitchen")}>
            <button>Kitchen</button>
          </a>
          <a onClick={() => filterCategory("chair")}>
            <button>Chairs</button>
          </a>
          <a onClick={() => filterCategory("skin-care")}>
            <button>Skin Care</button>
          </a>
        </div>
        {/*  */}

        <div className="proud-container">
          <div class="container">
            <div class="products-grid">
              {categories.map((item, index) => (
                <div key={index} class="product normal">
                  <a>
                    <div class="product-header">
                      <img src={item.img} alt="products image" />
                    </div>
                    <div class="product-details">
                      <p>{item.description}</p>
                      <p class="item-price">${item.price}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*  */}
      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Categories;
