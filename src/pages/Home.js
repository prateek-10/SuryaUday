import React, { useState} from 'react';
import { Box } from '@mui/material'

import HeroBanner from '../components/HeroBanner'
import MembershipCard from '../components/MembershipCard'
import FitnessEvaluater from '../components/FitnessEvaluater'

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <MembershipCard/>
      <FitnessEvaluater/>
    </Box>
  )
}

export default Home