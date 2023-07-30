import React from 'react'
import "./products.css"
import Footer from '../Footer/Footer';
import Header from '../Logo/Header';
import Navbar from '../Navbar/Navbar';
import Productslist from './Productslist';


  export default function Products() {
  return (
<>
    <Header />
    <Navbar />
    <Productslist />
    <Footer /> 
</>  
  )
}


