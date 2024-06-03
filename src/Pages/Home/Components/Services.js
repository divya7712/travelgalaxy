import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import React from 'react'
import img1 from "../../../assets/sliderImg1.jpg"
import img2 from "../../../assets/sliderImg2.jpg"
import img3 from "../../../assets/sliderImg3.jpeg"
import img4 from "../../../assets/sliderImg4.jpg"
import img5 from "../../../assets/sliderImg5.jpg"

const Services = () => {
    const images =[img1, img2, img3, img4, img5];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <>
     
    <section className="service"> 
    <h1 className="heading" style={{color:"white"}}>Services</h1>
    <Slider {...settings}>
      {
        images.map((image)=>{
            return(
                <div key={image}>
                    <img src={image} alt="an image galaxy" />
                </div>
            );
        })
      }
      </Slider>
    </section> 
    </>
  )
}

export default Services