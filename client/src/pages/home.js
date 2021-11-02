import React from "react";
import "../App.css";
import CoffeeHero from '../../src/Poured.png';
import MediaCard from "./products/product-card";


function Home() {
    return (
    <div>
      <img className="main-image" src={CoffeeHero} alt="Coffee-Pour"></img>
        
            <h2 className="home-para">Products</h2>
            <hr className="line"></hr>
            <MediaCard />
    </div>
    );

    
}

  export default Home;