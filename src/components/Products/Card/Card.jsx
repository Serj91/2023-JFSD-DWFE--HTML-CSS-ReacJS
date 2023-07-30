import React, { useState } from 'react';
import "./Card.css"

const Card =({ frontImg, backImg, title, price, description }) => {

  return (
  <div className='card'>
    <div className="flip-card">

      <div className="flip-card-inner">

        <div className="flip-card-front">
          <img src={frontImg} /> 
          <h3 className='card-text'>{title}</h3>
        </div>

        <div className="flip-card-back">
          <img src={backImg} />
          <h2 className='card-text'>{description}</h2>
          <h1 className='card-text'>{price}</h1>
        </div>

      </div>

    </div>
  </div>
  );

}

export default Card;