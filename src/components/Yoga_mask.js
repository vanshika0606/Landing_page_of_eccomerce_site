import React from 'react';
import mask from './assets/mask.jpg';
import './yoga-mask.css';

const Yoga_mask = () => {
  return (
    <div className='mask'>
      <img  className='yoga-mask' src={mask} />

      <div className='yoga-mats-info mask-info'>
       
      <p>ZERO EYE PRESSURE</p>
      <h1>Supper Comfy.</h1>
      <h3>100% Blackout for sleep mask</h3>
      <button className='shop-button in-yoga-info'>SHOP NOW</button>
      </div>

    </div>
  )
}

export default Yoga_mask
