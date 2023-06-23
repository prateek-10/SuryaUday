import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import pricing1 from '../assets/icons/pricing1.png'
import pricing2 from '../assets/icons/pricing2.png'
import pricing3 from '../assets/icons/pricing3.png'

const MembershipCard = () => {
  return (
   <Stack
   style={{display: 'flex', justifyContent: 'space-around', marginTop: '0px', paddingTop: '100px', paddingBottom: '40px' }}
   direction='row'>
    <Box
    style={{justifyContent:'center',backgroundColor: 'black', padding: '30px' }}>
      <div
      style={{backgroundColor:'hsl(180, 4%, 72%)', display: 'inline-block', padding: '5px', marginBottom: '10px' }}>
        <img src={pricing1} style={{width: '50px', justifyContent: 'center'}}/>
        </div>
      <Typography
      style={{fontSize: '23px', fontWeight: 'bold', color: 'hsl(180, 4%, 72%)'}}
      display="flex">
        BASIC PLAN
      </Typography>
      <Typography
      style={{fontSize: '35px', fontWeight: 'bolder', color: 'hsl(180, 4%, 72%)', margin: '10px 0px'}}
      display="flex">
        ₹500
      </Typography>
      <Typography>
        <ul
        style={{color: 'hsl(180, 4%, 72%)', listStyle: 'none'}}>
          <li
          style={{marginBottom: '5px'}}>Access to gym facilities 5 days a week</li>
          <li
          style={{marginBottom: '5px'}}>Guidance by Gym trainer</li>
          <li
          style={{opacity: '0.5', marginBottom: '5px'}}>Diet support by Paedatrician</li>
          <li
          style={{opacity: '0.5', marginBottom: '5px'}}>Personal App support to track your progress</li>
        </ul>
      </Typography>
      <a href='#Register' style={{ textDecoration: 'none', color: '#3A1212',display: 'flex', marginTop: '25px', justifyContent: 'center' }}>
          <button style={{ backgroundColor: '#00fffa', color: 'black', fontFamily: 'Josefin Sans', fontSize: '20px', padding: '15px 70px', cursor: 'pointer' }}>Purchase Now</button>
        </a>
    </Box>
    <Box
    style={{justifyContent:'center',backgroundColor: 'black', padding: '30px' }}>
      <div
      style={{backgroundColor:'hsl(180, 4%, 72%)', display: 'inline-block', padding: '5px', marginBottom: '10px' }}>
        <img src={pricing2} style={{width: '50px', justifyContent: 'center'}}/>
        </div>
      <Typography
      style={{fontSize: '23px', fontWeight: 'bold', color: 'hsl(180, 4%, 72%)'}}
      display="flex">
        PREMIUM PLAN
      </Typography>
      <Typography
      style={{fontSize: '35px', fontWeight: 'bolder', color: 'hsl(180, 4%, 72%)', margin: '10px 0px'}}
      display="flex">
        ₹1500
      </Typography>
      <Typography>
        <ul
        style={{color: 'hsl(180, 4%, 72%)', listStyle: 'none'}}>
          <li
          style={{marginBottom: '5px'}}>Access to gym facilities 5 days a week</li>
          <li
          style={{marginBottom: '5px'}}>Guidance by Gym trainer</li>
          <li
          style={{ marginBottom: '5px'}}>Diet support by Paedatrician</li>
          <li
          style={{opacity: '0.5', marginBottom: '5px'}}>Personal App support to track your progress</li>
        </ul>
      </Typography>
      <a href='#Register' style={{ textDecoration: 'none', color: '#3A1212',display: 'flex', marginTop: '25px', justifyContent: 'center' }}>
          <button style={{ backgroundColor: '#00fffa', color: 'black', fontFamily: 'Josefin Sans', fontSize: '20px', padding: '15px 70px', cursor: 'pointer' }}>Purchase Now</button>
        </a>
    </Box>
    <Box
    style={{justifyContent:'center',backgroundColor: 'black', padding: '30px' }}>
      <div
      style={{backgroundColor:'hsl(180, 4%, 72%)', display: 'inline-block', padding: '5px', marginBottom: '10px' }}>
        <img src={pricing3} style={{width: '50px', justifyContent: 'center'}}/>
        </div>
      <Typography
      style={{fontSize: '23px', fontWeight: 'bold', color: 'hsl(180, 4%, 72%)'}}
      display="flex">
        DIAMOND PLAN
      </Typography>
      <Typography
      style={{fontSize: '35px', fontWeight: 'bolder', color: 'hsl(180, 4%, 72%)', margin: '10px 0px'}}
      display="flex">
        ₹2500
      </Typography>
      <Typography>
        <ul
        style={{color: 'hsl(180, 4%, 72%)', listStyle: 'none'}}>
          <li
          style={{marginBottom: '5px'}}>Access to gym facilities 5 days a week</li>
          <li
          style={{marginBottom: '5px'}}>Guidance by Gym trainer</li>
          <li
          style={{ marginBottom: '5px'}}>Diet support by Paedatrician</li>
          <li
          style={{ marginBottom: '5px'}}>Personal App support to track your progress</li>
        </ul>
      </Typography>
      <a href='#Register' style={{ textDecoration: 'none', color: '#3A1212',display: 'flex', marginTop: '25px', justifyContent: 'center' }}>
          <button style={{ backgroundColor: '#00fffa', color: 'black', fontFamily: 'Josefin Sans', fontSize: '20px', padding: '15px 70px', cursor: 'pointer' }}>Purchase Now</button>
        </a>
    </Box>
   </Stack>
  )
}

export default MembershipCard