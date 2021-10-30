import React from "react";
import ProductCard from "./ProductCard"
import Products from "./Products"

function ProductList() {
    return (
        <div>
            <ProductCard products={Products}
            ></ProductCard>
        </div>
    )
}

export default ProductList;
