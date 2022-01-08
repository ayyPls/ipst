import Product from "./Product";
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { GridContainer } from "../styles";


export default function Content() {
    const [products, setProducts] = useState(useSelector(state => state.products));
    const productsToRender = products.map((product) => <Product key={product.id} data={product} />)
    return (
        <GridContainer>
            {productsToRender}
        </GridContainer>
    );
}