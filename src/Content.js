import Product from "./Product";
import React, { useState } from 'react';



export default function Content(props) {
    const productsList = [
        {
            id: 1,
            mainImage: 'images/main-image.jpg',
            secondaryImage: 'images/secondary-image.webp'
        },
        {
            id: 2,
            mainImage: 'images/main-image.jpg',
            secondaryImage: 'images/secondary-image.webp'
        },
        {
            id: 3,
            mainImage: 'images/main-image.jpg',
            secondaryImage: 'images/secondary-image.webp'
        },
        {
            id: 4,
            mainImage: 'images/main-image.jpg',
            secondaryImage: 'images/secondary-image.webp'
        },
        {
            id: 5,
            mainImage: 'images/main-image.jpg',
            secondaryImage: 'images/secondary-image.webp'
        },
    ]
    const [products, setProducts] = useState(productsList);
    const productsToRender = products.map((product) => <Product key={product.id} data={product} />)
    return (
        <div className="content-grid">
            {productsToRender}
        </div>
    );
}