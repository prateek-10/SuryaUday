import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo1 from '../assets/images/Logo1.png'

const Navbar = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  const navbarStyle = {
    position: 'sticky',
    top: '0',
    zIndex: '100',
    background: 'white', // Customize the background color as needed
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-around" sx={{ gap: { sm: '280px', xs: '40px' }, mt: { sm: '0px', xs: '6px', ...navbarStyle, padding: '5px 0px' } }} px="20px">
      <Link to="/">
        <img src={Logo1} alt="Logo" style={{ width: '52px', height: '52px', margin: '0 0px', display: "block", alignItems: "center" }}/>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="20px"
        alignItems="center"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a href="#Services" style={{ textDecoration: 'none', color: '#3A1212' }} onClick={() => handleScrollToSection('Services')}>Services</a>
        <a href='#Membership' style={{ textDecoration: 'none', color: '#3A1212' }}>Membership Details</a>
        <a href='#Contact' style={{ textDecoration: 'none', color: '#3A1212' }}>Contact us</a>
      </Stack>
      <Stack
        direction="row"
        gap="40px"
        fontSize="20px"
        alignItems="center"
        justifyContent="flex-end"
      >
        <a href='#Login' style={{ textDecoration: 'none', color: '#3A1212' }}>Sign In</a>
        <a href='#Register' style={{ textDecoration: 'none', color: '#3A1212' }}>
          <button style={{ backgroundColor: '#00fffa', color: 'black', fontFamily: 'Josefin Sans', fontSize: '20px', padding: '8px 8px', cursor: 'pointer'}}>Register Now</button>
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar