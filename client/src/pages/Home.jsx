import React from 'react'
import { Header } from '../components/Header'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import { Testimonial } from '../components/Testimonial'
import Upload from '../components/Upload'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Steps/>
        <BgSlider/>
        <Testimonial/>
        <Upload/>
    </div>
  )
}

export default Home