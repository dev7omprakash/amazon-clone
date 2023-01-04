import React from "react";
import "../CSS/Product.css";
function Product({ title, img, price, rating }) {
  return (
    <div className="product">
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((val, ind) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt="" className="product-image" />

      <button className="product-button">Add to cart</button>
    </div>
  );
}

export default Product;
