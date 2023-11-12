import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <>
      <div class="container">
        <div class="banner-container">
          <div class="text-side">
            <div className="text-info">
              <h2>Creative harmonious living</h2>
              <p>
                Minimal Products are all made to standard sizes so that you can
                mix and match them freely.
              </p>
              <a href="/categories/all">
                <button>Shop now</button>
              </a>
            </div>
          </div>
          <div class="img-side">
            <img src="../assets/img/banner/banner2.jpg" alt="banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
