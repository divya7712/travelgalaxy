import React from 'react'
import { useState } from "react";
import "./HeroStyles.css"

const Faq = () => {
    const data = [
        {
            question: "Question 1?",
            answers:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru",

        },
        {
            question: "Question 2?",
            answers:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru",

        },
        {
            question: "Question 3?",
            answers:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru",

        },
        {
            question: "Question 4?",
            answers:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru",

        },
    ];
    const [selected, setSelected] =useState(null);

    const handleSelect = (i)=>{
        if(selected === i){
            return setSelected(null);

        }
        setSelected(i);
    }

  return (
    <>
    
    <section className='faq'>
    
        <div className='item'>
        <h1 className="heading" style={{color: 'white'}}>Faqs</h1>

            {
                data.map((item, i) =>{
                    return(
                        <div className='wrapper' key={i}>
                        <div className='question' onClick={() => handleSelect(i)}>
                            <h3>{item.question}</h3>
                            <img src={require("../../../assets/arrow.png")} alt='' className={selected=== i ? "reverse" : " "}/>
                        </div>
                        <div className={selected === i ? "answers show" : "answers"}>
                            <p>{item.answers}</p>
                        </div>
                    </div>
                    );
                })
            }

        </div>

    </section>
    </>
  )
}

export default Faq
