import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./ProductsCart.css";

function ProductsCart({ id, description, image, price, title }) {
  return (
    <Link
      to={{
        pathname: `/products-${id}`,
        data: {
          description,
          image,
          price,
          title,
        },
      }}
    >
      <div className="Products_cart">
        <div
          className="products_img_div"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div className="productsContent">
          <h1>{title}</h1>
          <p>{price}</p>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductsCart;
