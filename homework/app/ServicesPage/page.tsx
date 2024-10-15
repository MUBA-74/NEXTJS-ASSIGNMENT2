import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection/Hero";
import cssstyles from "./about.module.css";
import Link from "next/link";


function Servicespage() {

  
  return (
    <div>

      <Header></Header>
      <h2 className={cssstyles.h2}>This is our magnified yet elegant Services page with brief orientation of our genuine services throughout.</h2>

      <HeroSection></HeroSection>



      <Link href="/ServicesPage/services-development"  className='gold'>
        services-development
      </Link>








      <Footer></Footer>
    </div>
  )
}
console.log(cssstyles,"cssstyles");

export default Servicespage;