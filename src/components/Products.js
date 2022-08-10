import React from 'react';
import './product.css';
import  backl from './assets/backless_chair.jpg'
import bricks from './assets/brick_belts.jpg'
import chair from './assets/chair.jpg'

const Products = () => {
  return (
    <div className='products'>
      <div className='backless-chair'>
       
       <img src={backl}  className='backless-chair-img'/>
       <div className='backless-chair-info'>
       <h3>Meditation backless chair</h3>
       <h4>₹ 2,599 </h4>
       <button className='shop-button in-yoga-info' >SHOP NOW</button>
       </div>

      </div>
      <div className='backless-chair chair'>
       
       <img src={bricks}  className='backless-chair-img'/>
       <div className='backless-chair-info'>
       <h3>Yoga bricks and belts</h3>
       <h4>₹ 1,200 </h4>
       <button className='shop-button in-yoga-info' >SHOP NOW</button>
       </div>

      </div>
      <div className='backless-chair'>
       
       <img src={chair}  className='backless-chair-img'/>
       <div className='backless-chair-info'>
       <h3>Meditation chair</h3>
       <h4>₹ 5,599 </h4>
       <button className='shop-button in-yoga-info' >SHOP NOW</button>
       </div>

      </div>
    </div>
  )
}

export default Products
