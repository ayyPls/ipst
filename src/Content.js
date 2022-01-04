import Product from "./Product";
import React, { useState } from 'react';
import { useSelector } from "react-redux";


export default function Content(props) {
    const [products, setProducts] = useState(useSelector(state => state.products));
    const productsToRender = products.map((product) => <Product key={product.id} data={product} />)
    return (
        <div className="content-grid">
            {productsToRender}
        </div>
    );
}