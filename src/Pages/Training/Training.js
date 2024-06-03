import React from 'react'
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import About from '../Home/Components/About';

const Training = () => {
  return (
    <>
   <Navbar />
   <Header heading="Training Page" />
   <About heading="Training"/>
   <Footer />
   </>
  )
}

export default Training