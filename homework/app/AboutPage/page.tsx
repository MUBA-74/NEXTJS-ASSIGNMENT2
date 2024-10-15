import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection/Hero";
import cssstyle from "./about.module.css";


const Aboutpage = () => {

  
  return (
    <div>
      <Header></Header>
      <h1 className={cssstyle.h1}>This is our About page filled with diverse information about us and our key authentic services worldwide.</h1>

      <HeroSection></HeroSection>




      <Footer></Footer>
    </div>
  )


  
}





console.log(cssstyle, "cssstyle");

export default Aboutpage;