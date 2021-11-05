import React from "react";
import "../App.css";
import CoffeeHero from '../../src/Poured.png';
import ProductCard from "./products/product-card";

import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from "../utils/queries";


function Home() {
  const { loading, data } = useQuery(QUERY_PRODUCTS, {
    fetchPolicy: "no-cache"
  });
  const productList = data?.Product || [];
  console.log(data);
  console.log(productList);

    return (
    <div>
      <img className="main-image" src={CoffeeHero} alt="Coffee-Pour"></img>      
    </div>
    );   
}

export default Home;