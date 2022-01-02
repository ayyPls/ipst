import React, { useState } from 'react';

export default function Product(props){
    //hook для того, чтобы менять картнику по наведению
    const [imageToShow, setImage] = useState(props.mainImage);
    return (
        <div><img 
        src={imageToShow} 
        onMouseEnter={()=>setImage(props.secondaryImage)}
        onMouseLeave={()=>setImage(props.mainImage)}
        /></div>
    );
}
