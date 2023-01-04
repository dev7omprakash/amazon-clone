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
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            img="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
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
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
