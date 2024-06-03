import React from 'react'
import {Link} from 'react-router-dom'
import facebook from '../../assets/facebook.png';
import youtube from '../../assets/youtube.jpg';
import insta from '../../assets/insta.jpg';
import './Footer.css'



const Footer = () => {
    const social = [facebook, youtube,insta];

  return (
    <footer>
        <h1>Galaxy-Travel</h1>
        <div className="links">
            <h3>Useful Links</h3>
                <Link to="/">Home</Link>
                <Link to="/training">Training</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className='social'>
            {
                social.map((item) =>{
                    return(
                        <img src={item} alt=''/>
                    )
                })
            }

            </div>
    </footer>
  )
}

export default Footer