import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import cardio from '../assets/icons/cardio.png'
import HealthStatus from './SubComponents/HeartStatus'
import flexibilty from '../assets/icons/flexibility.png'
import Flexibility from './SubComponents/Flexibility'
import Muscle from './SubComponents/Muscle'
import muscle from '../assets/icons/muscle.png'
import bmi from'../assets/icons/bmi.jpg'
import Bmi from './SubComponents/Bmi'

const FitnessEvaluater = () => {
  return (
    <Stack
      display="flex"
      direction="row"
      justifyContent="space-around">
      <Box
        style={{ justifyContent: 'center',backgroundColor: 'aqua', padding: '5px 30px', paddingBottom: '80px'}}>
        <div
          style={{ display: 'flex', justifyContent: 'center'}}>
          <img src={cardio} style={{ width: '70px', justifyContent: 'center', marginTop:'10px' }} alt="image" />
        </div>
        <Typography
          display="flex"
          style={{ fontSize: '30px', fontWeight: 'bolder', color: 'black', justifyContent: 'center', marginTop:'10px' }}>
          CARDIO FITNESS
        </Typography>
        <HealthStatus/>
      </Box>
      <Box
          style={{ justifyContent: 'center',backgroundColor: 'aqua', padding: '5px 30px', paddingBottom: '80px' }}>
          <div
            style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={bmi} style={{ width: '70px', justifyContent: 'center', marginTop:'10px' }} alt="image" />
          </div>
          <Typography
            display="flex"
            style={{ fontSize: '30px', fontWeight: 'bolder', color: 'black', justifyContent: 'center', marginTop: '10px' }}>
            BODY MASS INDEX
          </Typography>
          < Bmi/>
        </Box>
      </Stack>
      /* <Box
        style={{ justifyContent: 'center', backgroundColor: 'aqua', padding: '5px 30px' }}>
        <div
          style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={flexibilty} style={{ width: '70px', justifyContent: 'center', marginTop:'10px' }} alt="image" />
        </div>
        <Typography
          display="flex"
          style={{ fontSize: '30px', fontWeight: 'bolder', color: 'black', justifyContent: 'center', marginTop: '10px' }}>
          BASIC FLEXIBILITY
        </Typography>
        <Flexibility/>
      </Box> */
    /* <Stack
      display="flex"
      direction="row"
      justifyContent="space-around"
      marginTop='50px'>
        <Box
          style={{justifyContent: 'center',backgroundColor: 'aqua', padding: '5px 30px', paddingBottom: '80px' }}>
          <div
            style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={muscle} style={{ width: '70px', justifyContent: 'center', marginTop:'10px' }} alt="image" />
          </div>
          <Typography
            display="flex"
            style={{ fontSize: '30px', fontWeight: 'bolder', color: 'black', justifyContent: 'center', marginTop: '10px' }}>
            MUSCLE STRENGTH
          </Typography>
          <Muscle/>
        </Box> */
        /* <Box
          style={{ justifyContent: 'center',backgroundColor: 'aqua', padding: '5px 30px', paddingBottom: '80px' }}>
          <div
            style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={bmi} style={{ width: '70px', justifyContent: 'center', marginTop:'10px' }} alt="image" />
          </div>
          <Typography
            display="flex"
            style={{ fontSize: '30px', fontWeight: 'bolder', color: 'black', justifyContent: 'center', marginTop: '10px' }}>
            BODY MASS INDEX
          </Typography>
          < Bmi/>
        </Box> *
      /* </Stack></> */
  )
}

export default FitnessEvaluater