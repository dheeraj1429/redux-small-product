import React from "react";
import { Link } from "react-router-dom";

import "./Products.css";

function Products({ id, image, price, title }) {
  return (
    <Link to={`product${id}`}>
      <div className="productsCart">
        <div className="productsInner">
          <div
            className="ProductsImg"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
          <div className="ProductsContent">
            <h1>{title}</h1>
            <p>${price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Products;
