import React from 'react'
import Link from "next/link";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/Hero";


const NavBar = () => {

  

  return (
    <div>

      <Header></Header>
      <h1 className='brown'>This is our engaging and embellishing Home page. </h1>
      <p   className='pink'>Welcome! to our world full of knowledge and wisdom.</p>

  <HeroSection></HeroSection>




      <div>
  


        <nav>

          
          <li>
            <Link href="/" className='red'>Homepage</Link>            <Link href="/AboutPage" className='gold' target="_blank">AboutPage</Link>             <Link href="/ContactPage" className='blue'>ContactPage</Link>           <Link href="/ProductPage" className='yellow'>ProductPage</Link>                 <Link href="/ServicesPage" className='green'>ServicesPage</Link>
            </li> 
        
         
        </nav>
      
      
        
      </div>






      <Footer></Footer>
    </div>








  )
  
}


export default NavBar;

  

