import { useEffect } from 'react';

import bass from '../assets/bass.png'; 
import amp from '../assets/amp.png'; 
import guitar from '../assets/guitar.png'; 
import mic from '../assets/mic.png'; 
import rock from '../assets/rock.png'; 

import "../styles/Footer.css"

function Footer() {

  useEffect(() => {
    console.log("Footer rendered!")
  })

  return (
    <div className="footer">
      <img src={bass} alt="" />
      <img src={amp} alt="" />
      <img src={guitar} alt="" />
      <img src={mic} alt="" />
      <img src={rock} alt="" />
    </div>
  );
}

export default Footer;
