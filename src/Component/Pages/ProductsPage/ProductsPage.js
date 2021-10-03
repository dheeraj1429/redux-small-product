import React, { useEffect } from "react";
import { selectedProduct } from "../../../Redux/Action/action";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import axios from "axios";

import "./Productspage.css";

function ProductsPage() {
  const selectorProduct = useSelector((state) => state);
  const dispatch = useDispatch();
  const Param = useParams();
  const paramIdNum = Param.ProductsId;

  const responseDataPorduct = async () => {
    const productSelectItem = await axios.get(`https://fakestoreapi.com/products/${paramIdNum}`).catch((err) => console.log(err));
    dispatch(selectedProduct(productSelectItem.data));
  };

  useEffect(() => {
    responseDataPorduct();
  }, []);

  console.log(selectorProduct);

  return (
    <>
      <div className="container_div">
        <div className="InnerCart">
          <div className="img"></div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
