import React from "react";
import "../CSS/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
          alt=""
          className="header-logo"
        />
      </Link>
      <div className="header-search">
        <input type="text" className="header-searchIn" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLn1">Hello Guest</span>
          <span className="header-optionLn2">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-optionLn1">Returns</span>
          <span className="header-optionLn2">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLn1">Your</span>
          <span className="header-optionLn2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-optionBsk">
            <ShoppingBasketIcon />
            <span className="header-optionLn2 header-bsk-count">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
