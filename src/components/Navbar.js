import React , {useState} from 'react'

import './Navbar.css'




const Navbar = () => {


    const[click,  setClick] = useState(0)

    

    const clicked = ()=>{
        
        if(click==2 || click==1){
            setClick(0);
        }else{
            setClick(1)
        }
       
       
    }
  return (
    <div>
      <div className='navbar'>
        <div className='logo'>
            
            <i className="fa fa-bars" aria-hidden="true" onClick={ clicked}></i>
            <div className='search-bar'>
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text"  placeholder='Search '/>
            </div>
        </div>

        
        <div className="list-images">
        
        <ul className={click ? "hide show":"hidee hide"}>
            <li>Yoga accessories</li>
            <li>Meditation chair</li>
            <li>Sleep mask</li>
            <li>Gift Cards</li>
            
            <li >On Sale</li>
            
        </ul>
         
        
          
        <div className='user-cart'>
           <span >
           <i className="fa fa-user" aria-hidden="true"></i>
           </span>
           <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
