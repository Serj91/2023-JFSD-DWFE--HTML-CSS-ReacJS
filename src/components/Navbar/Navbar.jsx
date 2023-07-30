import React from 'react';
import './Navbar.css';


function Navbar() {
    return (
      <nav className='buttons'>
        <a className='button' href="/">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Inicio
        </a>
        <a className='button' href="Productos">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Productos
        </a>
        <a className='button' href="Sobre nosotros">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Sobre nosotros
        </a>
        <a className='button' href="Contacto">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Contacto
        </a>
      </nav>
    );
      
  }




  export default Navbar;