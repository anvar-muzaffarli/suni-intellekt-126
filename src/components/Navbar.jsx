import React, {useRef} from 'react'
import brendinLogosu from '../assets/images/logo.svg'
import './Navbar.css'
// iconlarin daxil edilmesi
import {AiOutlineBars} from 'react-icons/ai'
import {GiCrossedSwords} from 'react-icons/gi'

import Button from './Button'

import { Link } from 'react-router-dom'

const Navbar = () => {
    // JSX DE DEYISHENLER NEYIN ICERISINDE QEYD OLUNUR? {}
  const overlayDivininUnvani = useRef()
  // console.log(overlayDivininUnvani.current)
    const openOverlayMenu = (e) => {
      const kliklediyimYer = e.target

      if(kliklediyimYer.classList.contains('bars-icon')) {
        overlayDivininUnvani.current.classList.add('aktiv')
      }
    }

    const closeOverlayMenu = (e) =>  {
      const kliklediyimYer = e.target

      if(kliklediyimYer.classList.contains('cross-icon')) {
        overlayDivininUnvani.current.classList.remove('aktiv')

      }
    }
    
  return (
    <>
    <div className="overlay" ref={overlayDivininUnvani}>
        <GiCrossedSwords className='cross-icon' onClick={closeOverlayMenu}/>

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
    <AiOutlineBars className='bars-icon' onClick={openOverlayMenu} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="haqqimizda">About</Link>
        </li>
 
        <li className="nav-item">
        <a className="nav-link text-white" href="#">Services</a>
      </li>

      
      <li className="nav-item">
      <Link className="nav-link text-white" to="blog">Blog</Link>
    </li>

    <li className="nav-item">
    <Link className="nav-link text-white" to="elaqe">Contact</Link>
  </li>

      </ul>
     
     <Button buttonunIcindekiDeyer = "Sign In" klassAdi="my-custom-btn"/>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar