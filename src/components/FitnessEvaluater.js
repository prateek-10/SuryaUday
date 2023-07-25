import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import cardio from '../assets/icons/cardio.png'
import HealthStatus from './SubComponents/HeartStatus'

const FitnessEvaluater = () => {
  return (
    <><Stack
      display="flex"
      direction="row"
      justifyContent="space-around">
      <Box
        style={{ justifyContent: 'center', backgroundColor: 'aqua', padding: '5px 30px' }}>
        <div
          style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={cardio} style={{ width: '70px', justifyContent: 'center', marginTop:'10px' }} alt="image" />
        </div>
        <Typography
          display="flex"
          style={{ fontSize: '30px', fontWeight: 'bolder', color: 'black', justifyContent: 'center', marginTop:'10px' }}>
          CARDIO FITNESS
        </Typography>
        {/* <Typography
          style={{ fontSize: '20px', fontWeight: 'bold', color: 'black', margin: '10px 0px' }}
          textAlign='center'>
          PRE-REQUISITES FOR EVALUATION
        </Typography>
        <Typography>
          <ul
          textAlign={'center'}
            style={{ color: 'black', listStyle: 'inside', fontWeight: '600' }}>
            <li
              style={{ marginBottom: '5px' }}>Stopwatch</li>
            <li
              style={{ marginBottom: '5px' }}>Blood Pressure monitor</li>
          </ul>
        </Typography> */}
        <HealthStatus/>
      </Box>
      <Box
        style={{ justifyContent: 'center', backgroundColor: 'white', padding: '5px 30px' }}>
        <div
          style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={cardio} style={{ width: '70px', justifyContent: 'center', marginTop:'5px' }} alt="image" />
        </div>
        <Typography
          display="flex"
          style={{ fontSize: '30px', fontWeight: 'bolder', color: 'black', justifyContent: 'center' }}>
          BASIC FLEXIBILITY
        </Typography>
        <Typography
          style={{ fontSize: '20px', fontWeight: 'bold', color: 'black', margin: '10px 0px' }}
          display="flex">
          PRE-REQUISITES FOR EVALUATION
        </Typography>
        <Typography>
          <ul
            style={{ color: 'black', listStyle: 'none', fontWeight: '600' }}>
            <li
              style={{ marginBottom: '5px' }}>Stopwatch</li>
            <li
              style={{ marginBottom: '5px' }}>Blood Pressure monitor</li>
          </ul>
        </Typography>
        <HealthStatus/>
      </Box>
    </Stack>
    <Stack
      display="flex"
      direction="row"
      justifyContent="space-around"
      marginTop='50px'>
        <Box
          style={{ justifyContent: 'center', backgroundColor: 'white', padding: '5px 30px' }}>
          <div
            style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={cardio} style={{ width: '70px', justifyContent: 'center' }} alt="image" />
          </div>
          <Typography
            display="flex"
            style={{ fontSize: '30px', fontWeight: 'bolder', color: 'black', justifyContent: 'center' }}>
            MUSCLE STRENGTH
          </Typography>
          <Typography
            style={{ fontSize: '20px', fontWeight: 'bold', color: 'black', margin: '10px 0px' }}
            display="flex">
            PRE-REQUISITES FOR EVALUATION
          </Typography>
          <Typography>
            <ul
              style={{ color: 'black', listStyle: 'none', fontWeight: '600' }}>
              <li
                style={{ marginBottom: '5px' }}>Stopwatch</li>
              <li
                style={{ marginBottom: '5px' }}>Blood Pressure monitor</li>
            </ul>
          </Typography>
          <HealthStatus />
        </Box>
        <Box
          style={{ justifyContent: 'center', backgroundColor: 'white', padding: '5px 30px' }}>
          <div
            style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={cardio} style={{ width: '70px', justifyContent: 'center' }} alt="image" />
          </div>
          <Typography
            display="flex"
            style={{ fontSize: '30px', fontWeight: 'bolder', color: 'black', justifyContent: 'center' }}>
            BODY MASS INDEX
          </Typography>
          <Typography
            style={{ fontSize: '20px', fontWeight: 'bold', color: 'black', margin: '10px 0px' }}
            display="flex">
            PRE-REQUISITES FOR EVALUATION
          </Typography>
          <Typography>
            <ul
              style={{ color: 'black', listStyle: 'none', fontWeight: '600' }}>
              <li
                style={{ marginBottom: '5px' }}>Stopwatch</li>
              <li
                style={{ marginBottom: '5px' }}>Blood Pressure monitor</li>
            </ul>
          </Typography>
          <HealthStatus />
        </Box>
      </Stack></>
  )
}

export default FitnessEvaluater