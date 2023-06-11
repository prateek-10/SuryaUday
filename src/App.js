import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import './App.css';
import Services from './pages/Services';
import Contact_us from './pages/Contact_us'
import Membership from './pages/Membership';
import Sign_in from './pages/Sign_in';
import Sign_up from './pages/Sign_up';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <Box width="400 px" sx={{width: {xl: '1488px'}}} m="auto">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Services/:id" element={<Services/>}/>
      <Route path="/Membership/:id" element={<Membership/>}/>
      <Route path="/Contact_us/:id" element={<Contact_us/>}/>
      <Route path="/Sign_in/:id" element={<Sign_in/>}/>
      <Route path="/Sign_up/:id" element={<Sign_up/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App