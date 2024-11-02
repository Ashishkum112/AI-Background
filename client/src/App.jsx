import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Buycredit from './pages/Buycredit'
import Results from './pages/Results'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buy' element={<Buycredit/>}/>
        <Route path='/result' element={<Results/>}/>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App