import React from 'react';
import cssstyles from "./about.module.css";

const FooterPage = () => {
  return (
    <div> <div className={cssstyles.div}>This is a descriptive yet appealing FooterPage.</div>
    <p className={cssstyles.p}>@2024 All Rights Reserved. </p>
    
    </div>
    
  )
}
console.log(cssstyles,"cssstyles");

export default FooterPage;