
import './App.css';
import Image_carousel from './components/Image_carousel';

import Navbar from './components/Navbar';
import Website_name from './components/Website_name.js';
import Yoga_mask from './components/Yoga_mask';
import Yoga_mat from './components/Yoga_mat';
import Products from './components/Products.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Website_name/>
      <Image_carousel/>
      <Yoga_mat/>
      <Yoga_mask/>
      <Products/>

      <Footer/>
    </div>
  );
}

export default App;
