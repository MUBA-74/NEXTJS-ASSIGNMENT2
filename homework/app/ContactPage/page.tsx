import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection/Hero";
import cssstyles from "./about.module.css";
import Link from "next/link";


const Contactpage = () => {

  
  return (
    <div> 
      <Header></Header>
        <h3 className={cssstyles.h3}> This is our detail oriented contact page.Contact us for more information.</h3>

        <HeroSection></HeroSection>



        <Link href="/ContactPage/contact-development"  className='maroon'>
        contact-development
      </Link>
















        <Footer></Footer>
   </div>

  
  )
}




console.log(cssstyles,"cssstyles");


export default Contactpage;