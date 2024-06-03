import React from 'react'

const Single = ({heading, line1,line2 ,line3}) => {
  
  return (
    <div className='card'>
        <div className='list'>
            <h4>{heading}</h4>
            <div className='content'>
                <p>{line1}</p>
                <p>{line2}</p>
                <p>{line3}</p>
            </div>
        </div>
    </div>
  )
}

export default Single