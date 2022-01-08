import Product from "./Product";
import React from 'react';
import { useSelector } from "react-redux";
import { GridContainer } from "../styles";


export default function Content() {
    const products = useSelector(state => state.products);
    return (
        <GridContainer>
            {products.map((product) => <Product key={product.id} data={product} />)}
        </GridContainer>
    );
}