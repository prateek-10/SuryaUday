import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import heroimg from '../assets/images/heroimg.png'
import AbtUsImg1 from '../assets/images/AbtUsImg1.webp'

const HeroBanner = () => {
  return (
    <Stack>
    <Stack
      direction="row"
      sx={{ backgroundColor: 'lightblue', gap: { sm: '280px', xs: '40px' }, mt: { sm: '10px', xs: '6px' }, padding: '0px' }} px="20px" >
      <Box display='flex'
        flexDirection='row'
        sx={{ ml: 0}}>
        <img src={heroimg} style={{ width: '40vw', height: '80vh', backgroundColor: 'transparent' }} alt="image"/>
        <Typography
          color='#67042a' fontWeight="600" fontSize="50px" fontFamily='Anton' alignItems='center' paddingTop='100px' display="flex" flexDirection="column" >
          <div>GET YOUR FITNESS INTO YOUR</div>
          <div>OWN HANDS</div>
          <div>TRAIN WITH THE BEST</div>
        </Typography>
      </Box>
      </Stack>
      <Stack
        direction="row"
        gap="0px"
        fontSize="20px"
        alignItems="center"
        justifyContent="flex-end"
        margin="-40px 0px"
      >
        <a href='#Register' style={{ textDecoration: 'none', color: '#3A1212' }}>
          <button style={{ backgroundColor: '#00fffa', color: 'black', fontFamily: 'Josefin Sans', fontSize: '20px', padding: '25px 100px', cursor: 'pointer' }}>Get Started</button>
        </a>
        <a href='#Register' style={{ textDecoration: 'none', color: '#3A1212' }}>
          <button style={{ backgroundColor: '#00fffa', color: 'black', fontFamily: 'Josefin Sans', fontSize: '20px', padding: '25px 82px', cursor: 'pointer' }}>Book A Session</button>
        </a>
      </Stack>
      <Stack
      style={{display: 'flex',justifyContent: 'flex-end', marginTop: '50px'}}>
        <img src={AbtUsImg1} style={{ width: '60vw', height: '80vh',paddingTop: '100px', paddingLeft: '200px', justifyContent: 'center'}} alt="image"/>
        <Typography
        display='inline'
        color='#67042a' fontWeight="600" fontSize="26px"  fontFamily='Anton' style={{alignItems: 'center',
        justifyContent: 'center',
        padding: '30px',
        backgroundColor: 'yellow',
        width: '650px',
        marginTop: '-400px',
        marginLeft: '607px',
        height: '530px'}}>
        TRAIN WITH THE BEST
      </Typography>
      <a href='#Register' style={{ textDecoration: 'none', color: '#3A1212', marginTop: '-72.2px', marginLeft: '607px'  }}>
          <button style={{ backgroundColor: '#00fffa', color: 'black', fontFamily: 'Josefin Sans', fontSize: '20px', padding: '25px 100px', cursor: 'pointer', borderStyle: 'none' }}>Get Started</button>
        </a>
      </Stack>
    </Stack>
  )
}

export default HeroBanner