import React from "react";
import Products from "./Products"

function ProductList(props) {
    return (
        <div>
            <h2>{props.meme}</h2>
            <Products
            ></Products>
        </div>
    )
}

export default ProductList;
