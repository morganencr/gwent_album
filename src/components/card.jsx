import React, { useState } from 'react';
import "./card.css";


export const Card = ({
    imgSrc,
    imgAlt,
    title,
    description,
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="card-container" onClick={handleClick}>
            <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="card-front">
                    {imgSrc && <img src={imgSrc} alt={imgAlt} className="card-img" />}
                </div>
                <div className="card-back">
                    <div className="title-box">
                        {title && <h1 className="card-title">{title}</h1>}
                    </div>
                    <div className="description-box">
                        {description && <p className="card-description">{description}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};