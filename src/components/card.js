import React from 'react';

function Card({image, index}) {
    return (
        <div>
            <img src={image} key={index} alt={image}/>
        </div>
    )
}

export default Card;
