import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useHistory, useParams } from 'react-router-dom'

export default function Product(props) {
    //hook для того, чтобы менять картнику по наведению
    const [imageToShow, setImage] = useState(props.data.mainImage);
    return (
        <div>
            <Link to={'/item/'+props.data.id}>
            <img
                src={imageToShow}
                onMouseEnter={() => setImage(props.data.secondaryImage)}
                onMouseLeave={() => setImage(props.data.mainImage)}
            />
            </Link>
        </div>
    );
}
