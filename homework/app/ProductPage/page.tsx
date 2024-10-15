import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection/Hero";
import cssstyles from "./about.module.css";


function Productpage() {

  
  return (
    <div>

      <Header></Header>
        <h2 className={cssstyles.h2}> Welcome! to our sophisticated yet interesting products portfolio page.</h2>

        <HeroSection></HeroSection>












        <Footer></Footer>
        
    </div>
  )
}




console.log(cssstyles,"cssstyles");


export default Productpage;