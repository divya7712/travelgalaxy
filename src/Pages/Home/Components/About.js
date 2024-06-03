import React from 'react'
import "./HeroStyles.css"

const About = ({heading}) => {
  return (
    <>
    <h1 className="head" style={{backgroundColor:'black'}}>{heading}</h1>
    <section className='about'>
        <img src={require("../../../assets/img1.jpg")}/>
        <div className="Content">
            <h2>About-section</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed nisl urna. Mauris tincidunt felis nec nulla dapibus, in cursus mi ultricies. Cras interdum justo a nulla placerat, nec gravida mi fringilla. Proin ac augue purus. Curabitur a convallis mauris. Sed vehicula scelerisque viverra. Sed at est vitae eros faucibus bibendum ut sit amet purus.</p>
        

        </div>
    </section>
    </>
  )
}

export default About