import React from 'react'
import brendinLogosu from '../assets/images/logo.svg'
import './Navbar.css'
// iconlarin daxil edilmesi
import {AiOutlineBars} from 'react-icons/ai'
import {GiCrossedSwords} from 'react-icons/gi'

import Button from './Button'

const Navbar = () => {
    // JSX DE DEYISHENLER NEYIN ICERISINDE QEYD OLUNUR? {}
  return (
    <>
    <div className="overlay">
        <GiCrossedSwords className='cross-icon' />

        <div className="nav-links">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
        </div>
    </div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={brendinLogosu} alt="Berber " /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <AiOutlineBars className='bars-icon' />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About</a>
        </li>
 
        <li className="nav-item">
        <a className="nav-link text-white" href="#">Services</a>
      </li>

      
      <li className="nav-item">
      <a className="nav-link text-white" href="#">Blog</a>
    </li>

    <li className="nav-item">
    <a className="nav-link text-white" href="#">Contact</a>
  </li>

      </ul>
     
     <Button />
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar