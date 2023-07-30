import React from 'react'
import "./Home.css"
import Carousel from '../Carousel/Carousel'
import Footer from '../Footer/Footer'
import Header from '../Logo/Header'
import Navbar from '../Navbar/Navbar'




const Home = () => {
  return (
    <div>
    <Header />
    <Navbar />
    <Carousel />
    <Footer />
    </div>
  )
}
 
export default Home