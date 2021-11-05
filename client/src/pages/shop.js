import React from "react";
import "../App.css";
import ProductCard from "./products/product-card";

import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from "../utils/queries";

function Shop() {

  const { loading, data } = useQuery(QUERY_PRODUCTS, {
    fetchPolicy: "no-cache"
  });
  const productList = data?.Product || [];
  console.log(data);
  console.log(productList);

    return (
    <div>  
      <h2 className="home-para">Products</h2>
      <hr className="line"></hr>
      <ProductCard products={productList}/>
    </div>
    );   
}

export default Shop;
