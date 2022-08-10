import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./image.css";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";

const Image_carousel = () => {
  const [show, setShow] = useState(0);

  return (
    <>
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showStatus={false}
      stopOnHover={false}
      showThumbs={false}
      interval={4000}
     
    >
      <div>
      
        <img className="images" src={img1} />
         
         <p className="product">Meditation Cushion</p>
        <h2 className="first">As Inspiration As Your Practice</h2>
        
      </div>
      <div>
        <img className="images" src={img2} />
        <p className="product black">Yoga Mats</p>
        <h3 className="first black">As Commited As Your Practice</h3>
       
      </div>
      <div>
        <img className="images" src={img3} />
        <p className="product">Yoga brick & belt</p>
        <h3 className="first">As Consicous As Your Practice</h3>
        
      </div>
    </Carousel>
     
      <button className="shop-button">SHOP NOW</button>

    </>
  );
};

export default Image_carousel;
