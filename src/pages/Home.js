import React, { useState} from 'react';
import { Box } from '@mui/material'

import HeroBanner from '../components/HeroBanner'
import AbtUs from '../components/AbtUs';
import MembershipCard from '../components/MembershipCard'
import FitnessEvaluater from '../components/FitnessEvaluater'

const Home = () => {
  return (
    <Box
    sx={{ml: '0px'}}>
      <HeroBanner/>
      <AbtUs/>
      <MembershipCard/>
      <FitnessEvaluater/>
    </Box>
  )
}

export default Home