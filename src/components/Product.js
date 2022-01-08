import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../styles';
export default function Product(props) {
    const [imageToShow, setImage] = useState(props.data.mainImage);
    return (
        <div>
            <Link to={`/item/${props.data.id}`} >
                <Image width="40vh"
                src={imageToShow} 
                onMouseEnter={() => setImage(props.data.secondaryImage)} 
                onMouseLeave={() => setImage(props.data.mainImage)} />
            </Link>
        </div>
    );
}
