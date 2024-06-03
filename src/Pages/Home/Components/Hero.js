import React from 'react'
import video from "../../../assets/earth.mp4"
import {Link} from "react-router-dom";

import "./HeroStyles.css"

const Hero = () => {
  return (
    <div className="hero">
        <video src={video} autoPlay loop muted></video>
        <div className='content'>
            <h1>Travel. Galaxies</h1>
            <p>
                loreum ispum color sit amet constiidgfh
            </p>
            <div className='buttons'>
                <Link to ="/training">Try Now</Link>
                <Link to ="/contact">Launch</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero