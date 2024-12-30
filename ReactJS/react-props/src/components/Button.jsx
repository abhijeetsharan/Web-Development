import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div>
        <button onClick={props.handleClick} className='btn'>
            {props.text}
        </button>
        {props.children}
    </div>
  )
}

export default Button
