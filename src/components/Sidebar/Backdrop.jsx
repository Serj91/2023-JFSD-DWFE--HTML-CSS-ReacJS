import React from 'react'
import './Toolbar.css';

const Backdrop = ({sidebar, closeSidebar}) => {
  return (
    <div className={sidebar?"backdrop backdrop--open":"backdrop"} onClick={closeSidebar}></div>
  )
}

export default Backdrop