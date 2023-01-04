import React from "react";
import "../CSS/Home.css";
import Product from "../Components/Product";
function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61p-+Q-a5jL._SX3000_.jpg"
          alt=""
          className="home-image"
        />

        <div className="home-row">
          <Product
            id="75785787"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous"
            price={299}
            img="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="757887"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous"
            price={299}
            img="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
        </div>

        <div className="home-row">
          <Product
            id="7785787"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous"
            price={299}
            img="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="7578577787"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous"
            price={299}
            img="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="775785787"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous"
            price={299}
            img="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
        </div>

        <div className="home-row">
          <Product
            id="75785787"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous"
            price={299}
            img="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
