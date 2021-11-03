import React from "react";
import "../App.css";
import CoffeeHero from '../../src/Poured.png';
import ProductCard from "./products/product-card";
import Products from "../components/Products"


function Home() {
    return (
    <div>
      <img className="main-image" src={CoffeeHero} alt="Coffee-Pour"></img>
        
            <h2 className="home-para">Products</h2>
            <hr className="line"></hr>
            <ProductCard products={Products}/>
    </div>
    );

    
}

  export default Home;