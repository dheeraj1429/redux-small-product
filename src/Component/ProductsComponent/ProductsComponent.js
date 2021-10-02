import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../Redux/Action/action";
import ProductsCart from "../productsCart/ProductsCart";

import "./ProductsComponent.css";

function ProductsComponent() {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products`)
      .catch((err) => console.log("err", err))
      .finally(console.log("done"));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selector = useSelector((state) => state.allProducts.products);

  return (
    <>
      <div className="ContainerDiv">
        {/* {selector.map(({ id, ...otherProps }) => (
          <ProductsCart key={id} {...otherProps} id={id} />
        ))} */}
      </div>
    </>
  );
}

export default ProductsComponent;
