import React from 'react'
import "./styles.css"

  //  #for creating buttons with white and blue backgrounds

const Button = ({text,outlined}) => {
  return (
    <div className= {outlined ? "outlined-btn"  : 'btn'}>
      {text}
    </div>
  )
}

export default Button
