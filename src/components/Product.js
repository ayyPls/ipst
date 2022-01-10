import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, GridBlock } from '../styles/styled-components';
export default function Product(props) {
    const [imageToShow, setImage] = useState(props.data.mainImage);
    return (
        <GridBlock>
            <Link to={`/item/${props.data.id}`} >
                <Image width="25vw"
                    src={imageToShow}
                    onMouseEnter={() => setImage(props.data.secondaryImage)}
                    onMouseLeave={() => setImage(props.data.mainImage)} />
            </Link>
        </GridBlock>
    );
}
