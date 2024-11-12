import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Buycredit from './pages/Buycredit'
import Results from './pages/Results'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './components/AboutUs'
import CancelPolicy from './components/CancelPolicy'
import ContactUs from './components/ContactUs'
import TermsAndConditions from './components/TermsAndConditions'
import PrivacyPolicy from './components/PrivacyPolicy'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buy' element={<Buycredit/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/cancellation-policy' element={<CancelPolicy/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/terms-conditions' element={<TermsAndConditions/>}/>
        <Route path='/policy' element={<PrivacyPolicy/>}/>
        
      </Routes>
      <Footer/>

    </div>
  )
}


export default App