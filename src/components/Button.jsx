import React from 'react'
import './Button.css'
const Button = (props) => {
  console.log(props.buttonunIcindekiDeyer)
  return (
    <button className={props.klassAdi}>{props.buttonunIcindekiDeyer}</button>
  )
}

export default Button