import React from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Product from './components/Products/Product';
import TopProduct from './components/TopProducts/TopProduct';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonial from './components/Testimonials/Testimonial';
import Footer from './components/Footer/Footer';



const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  useEffect( ()=>{
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-sine",
      delay: 100,


    })

    AOS.refresh();
     
  }, []);

  return (
    <>
    <div>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Product />
      <TopProduct handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Testimonial />
      <Footer />
    
    
      
    </div>  
    </>
  )
}



export default App;