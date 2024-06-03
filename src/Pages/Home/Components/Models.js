import React from 'react'
import "./HeroStyles.css"
import {FaTimes} from "react-icons/fa"


const Models = ({Models, handleClick}) => {
  return (
    <div className="overlay">
      <div className="model">
        <div className='cross'>
        <FaTimes style={{color:"white"}} size={25} onClick={handleClick}/>:
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Curabitur pretium tincidunt lacus. </h1>
      </div>
    </div>
  )
}

export default Models