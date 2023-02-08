import React, {useRef} from 'react'
import './Navbar.css'
import brandLogo from '../assets/images/logo.svg'
// ARROW FUNCTION RAFCE
import { AiOutlineBars } from "react-icons/ai";
import { GiCrossedSwords } from "react-icons/gi";
import Button from './Button';


const Navbar = () => {

const qaraDivUnvanRef = useRef() 

  const qaraMenyunuAc = (e) => {
    const kliklenenElement = e.target
  
    if(kliklenenElement.classList.contains('bars-icon')) {
      qaraDivUnvanRef.current.classList.add('aktiv')
    }
  }

  const qaraMenyunuBagla = (e) => {
    const kliklenenElement = e.target

    if(kliklenenElement.classList.contains('cross-icon')) {
      qaraDivUnvanRef.current.classList.remove('aktiv')
    }
  }


  return (
    <>
    <div className='overlay' ref={qaraDivUnvanRef}>
        <GiCrossedSwords className='cross-icon' onClick={qaraMenyunuBagla}/>

        <div className='nav-links'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
        </div>
    </div>
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a className="navbar-brand" href="#"><img src={brandLogo}/></a>
    <button onClick={qaraMenyunuAc} class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <AiOutlineBars className='bars-icon' />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
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
      <Button className="my-custom-btn" butonunIcindekiYazi="Sign in"/>
      </div>
  </div>
</nav>
    </>

  )
}

export default Navbar