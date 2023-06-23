import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import cardio from '../assets/icons/cardio.png'
import HealthStatus from './SubComponents/HeartStatus'

const FitnessEvaluater = () => {
  return (
    <Stack
      display="flex"
      direction="row"
      justifyContent="space-around">
      <Box>
        <Box
          style={{ justifyContent: 'center', backgroundColor: 'white', padding: '30px' }}>
          <div
            style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={cardio} style={{ width: '70px', justifyContent: 'center' }} />
          </div>
          <Typography
            display="flex"
            style={{ fontSize: '30px', fontWeight: 'bolder', color: 'black', justifyContent: 'center' }}>
            CARDIO FITNESS
          </Typography>
          <Typography
            style={{ fontSize: '20px', fontWeight: 'bold', color: 'black', margin: '10px 0px' }}
            display="flex">
            PRE-REQUISITES FOR EVALUATION
          </Typography>
          <Typography>
            <ul
              style={{ color: 'black', listStyle: 'none', fontWeight: '600'}}>
              <li
                style={{ marginBottom: '5px' }}>Stopwatch</li>
              <li
                style={{ marginBottom: '5px' }}>Blood Pressure monitor</li>
            </ul>
          </Typography>
          <HealthStatus/>
        </Box>
      </Box>
      <Box>
        BASIC FLEXIBILITY
      </Box>
      <Box>
        MUSCLE STRENGTH
      </Box>
      <Box>
        BODY MASS INDEX
      </Box>
    </Stack>
  )
}

export default FitnessEvaluater