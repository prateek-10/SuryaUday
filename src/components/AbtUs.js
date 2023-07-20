import React from 'react'
import gym from '../assets/images/gym.jpg'
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Box, Stack, Typography } from '@mui/material'

const AbtUs = () => {
  return (
    <Stack style={{position: 'relative'}}>
    <Stack direction="row" style={{position: 'relative', overflow: 'hidden', justifyContent: 'flex-end', margin: '20px'}}>
    <ParallaxProvider>
    <Parallax speed={-50} style={{position: 'relative'}}>
      <img src={gym} style={{ width: '68vw', height: '80vh', backgroundColor: 'transparent'}} alt="image"/>
    </Parallax>
    </ParallaxProvider>
    </Stack>
    <Typography
        display='inline'
        color='#67042a' fontWeight="600" fontSize="26px"  fontFamily='Anton' style={{alignItems: 'center',
        justifyContent: 'center',
        padding: '30px',
        backgroundColor: 'yellow',
        width: '700px',
        marginTop: '350px',
        marginLeft: '200px',
        height: '400px', 
        position: 'absolute'}}>
        TRAIN WITH THE BEST
      </Typography>
    </Stack>
  )
}

export default AbtUs