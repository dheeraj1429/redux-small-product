import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../Redux/Action/action";
import Products from "../Products/Products";
import axios from "axios";

import "./HomePage.css";

function HomePage() {
  const selector = useSelector((state) => state.AllData.allProducts.data);
  const dispatch = useDispatch();

  const response = async () => {
    const data = await axios.get(`https://fakestoreapi.com/products`).catch((err) => console.log(err));
    dispatch(setProduct(data));
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <>
      <div className="container">
        {selector.map(({ id, ...otherProps }) => (
          <Products key={id} {...otherProps} id={id} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
