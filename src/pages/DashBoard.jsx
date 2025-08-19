import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
// import Footer from '../components/Footer'
import AppProduct from '../components/BodyContent'
import CopyRight from '../components/Footer'
import HeroSection from '../components/hero'
import PixelSqueezeInstructions from '../components/Use'
import Footer from '../components/Footer1'

const Dashboard = () => (
  
  <>
    <Navbar />
    <Header />
    <HeroSection/>
    <PixelSqueezeInstructions/>
    <AppProduct />
    <Footer/>
    <CopyRight />
  </>
)

export default Dashboard;
