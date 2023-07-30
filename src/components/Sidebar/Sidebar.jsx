import React from 'react'
import './Toolbar.css';
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineInfoCircle } from 'react-icons/ai';
import {BsTelephone} from 'react-icons/bs';


const Sidebar = ({sidebar}) => {
  return (
        <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
            <a href="/"><li className='i'><AiOutlineHome className='iconSidebar'/>Inicio</li></a>
            <a href="Productos"><li><AiOutlineShoppingCart className='iconSidebar'/>Productos</li></a>
            <a href="Sobre nosotros"><li><AiOutlineInfoCircle className='iconSidebar'/>Sobre nosotros</li></a>
            <a href="Contacto"><li><BsTelephone className='iconSidebar'/>Contacto</li></a>
        </div>
  )
}

export default Sidebar