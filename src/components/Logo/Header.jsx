import React from 'react'
import Logo from './Logo.jpg';
import './Header.css';

const Header = () => {
  return (
    <div className="logo">
          <img src={Logo} alt="Misiotrónica" />
    </div>
  )
}

export default Header