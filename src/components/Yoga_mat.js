import React from 'react';
import mat from './assets/mat.jpg'
import './yoga-mat.css'

const Yoga_mat = () => {
  return (
    <div className='mat'>
      <img className='yoga_mat' src={mat} />
      <div className='yoga-mats-info '>
       
      <p>THE GRIPPEST YOGA MATS EVER</p>
      <h1>Just Got Gripper.</h1>
      <h3>All New Pure Yoga Mats</h3>
      <button className='shop-button in-yoga-info'>SHOP NOW</button>
      </div>
      
    </div>
  )
}

export default Yoga_mat
