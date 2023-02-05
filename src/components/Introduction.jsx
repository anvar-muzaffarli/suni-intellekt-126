import React from 'react'
import Button from './Button'

import './Introduction.css'

import Typed from 'react-typed';



// shekil hissesi
import profilPic from '../assets/images/profil.svg'

const Introduction = () => {
  return (
    <div className='introduction-section row'>
        <div className="left-side col-12 col-md-6">
        <h6>Next genaretion platform</h6>
        <Typed
        className='typing-text'
        strings={[
            'Artificial Intelligence',
            'Cybersecurity',
            'Azure Clouding Systems']}
            typeSpeed={40}
            backSpeed={50}
           
            loop >
           
        </Typed>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

        <div className="button-groups">
            <Button buttonunIcindekiDeyer="Get started" klassAdi="my-custom-btn" />
            <Button buttonunIcindekiDeyer="Watch video" klassAdi="my-custom-btn" />
        </div>
        </div>

        <div className="right-side col-12 col-md-6 d-flex justify-content-end">
            <img src={profilPic} alt="" className='w-100' />
        </div>
    </div>
  )
}

export default Introduction