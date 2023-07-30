import React from 'react'
import "./Footer.css"
import { BsFacebook, BsTwitter, BsInstagram  } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="pie-pagina">
        <div className="grupo-1">
        <div className="box1">
            <h2 contentEditable="true" className='logo-foot'>Misiotronica</h2>
        </div>
        <div className="box1">
          <h2>Dirección:</h2>
          <p>Calle falsa 123, Misiones, Argentina</p>
          <h2>Horarios de atención:</h2>
          <p>Lunes a Viernes 9 a 18 hs</p>
          <p>Sabados 9 a 13hs</p>
          <h2>E-mail:</h2>
            <a href="mailto:info@misiotronica.com.ar" className='e-mail'>info@misiotronica.com.ar</a>
        </div>
        <div className="box1">
          <h2>SIGUENOS</h2>
          <div className="red-social">
            <a href="Facebook"> <BsFacebook/> </a> 
            <a href="Twitter"> <BsTwitter/> </a>
            <a href="Instagram"> <BsInstagram/> </a> 
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>&copy; 2023 <b>Sergio Nino</b> - Todos los Derechos Reservados.</small>
      </div>
    </footer>
  )
}

export default Footer