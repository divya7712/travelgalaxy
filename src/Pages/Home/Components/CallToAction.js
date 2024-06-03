import React, { useState } from 'react'
import "./HeroStyles.css"
import Models from './Models';



const CallToAction = () => {
    const [models, setModels] = useState(false);

    const handleClick =()=>{
        setModels(!models);

    }
  return (
    <>
    <section className='Call-to-action'>
        <h2>Hurry Up Book Your Tickets</h2>
        <button onClick={handleClick}>Know More!</button>
    </section>
    {models && <Models handleClick ={handleClick}/>}
  
    </>
    

  );
}

export default CallToAction