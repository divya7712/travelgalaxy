import React from 'react'
import Single from './Single'
import './PricingStyles.css'

const Card = () => {

  const data =[
    {
      id : 1,
      heading: "Basic",
      line1 : "5 Lakhs",
      line2 : "No Unlimited Access",
      line3 : "No Food",
    },
    {
      id : 1,
      heading: "Medium",
      line1 : "10 Lakhs",
      line2 : "No Unlimited Access",
      line3 : "No Food",
    },
    {
      id : 1,
      heading: "Advanced",
      line1 : "15 Lakhs",
      line2 : "No Unlimited Access",
      line3 : "No Food",
    },

  ]
  return (
    <>
     <p style={{background:'black', color:'white',textAlign:'center',paddingTop: "45px",
    fontSize: "55px"}}>Pricing</p> 
        <section className='cards'>
          {
            data.map((item)=>{
              const{id, heading, line1,line2 ,line3} =item;
              return(
                <Single heading= {heading} line1={line1} line2={line2} line3={line3}/>
              )
            

            })
          }
           
            
        </section>
    </>
  )
}

export default Card