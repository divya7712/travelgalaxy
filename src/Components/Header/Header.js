import React from 'react'
import imageHeader from '../../assets/sliderImg3.jpeg'
import "./Header.css";

const Header = ({heading}) => {
  
  return (
   <section className='header' style={{backgroundImage :`url(${imageHeader})`, backgroundSize:"cover", backgroundPosition: "fixed"}}>
    <h1>{heading}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed nisl urna. </p>
   </section>
  )
}

export default Header