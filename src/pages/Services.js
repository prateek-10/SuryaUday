import React, {useEffect, useState} from 'react'
import { Box, Button, TextField, Typography, Stack } from '@mui/material'
import { foodoptions, Fetchdata } from '../utilities/Fetchdata'
import SERVICES from '../assets/images/SERVICES.png'

const fieldMapping = {
  name: 'Food Name',
  calories: 'Calories',
  serving_size_g: 'Serving Size (g)',
  fat_total_g: 'Total Fat (g)',
  fat_saturated_g: 'Saturated Fat (g)',
  protein_g: 'Protein (g)',
  sodium_mg: 'Sodium (mg)',
  potassium_mg: 'Potassium (mg)',
  cholesterol_mg: 'Cholesterol (mg)',
  carbohydrates_total_g: 'Total Carbohydrates (g)',
  fiber_g: 'Dietary Fiber (g)',
  sugar_g: 'Sugar (g)',
};


const Services = () => {
  const [search, setsearch]= useState('')
  const [foodData, setFoodData] = useState(null);

  const handlesearch = async ()=>{
    if (search) {
      try {
        const url = `https://api.calorieninjas.com/v1/nutrition?query=${search}`;
        const response = await Fetchdata(url, foodoptions);
        setFoodData(response);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    }
  };
  return (
    <div id="Services" style={{ height: '400px', overflowY: 'auto' }}>
      <Stack>
      <div style={{ display: "flex" ,justifyContent: 'center', alignItems: 'center', height: '50px'}}>
        <img src={SERVICES} style={{height: '100px'}} />
      </div>
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight="700" sx={{fontSize: "44px"}} mb="50px" textAlign="center">
        Track your Nutrition Intake 
      </Typography>
      <Box position="relative" mb="72px">
      <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
          placeholder="Search Food-Items"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: 'black', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handlesearch}>
          Search
        </Button>
      </Box>
      {/* <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box> */}
{foodData && (
        <Box>
          <Typography variant="h6">Nutrition Information:</Typography>
          <ul>
            {foodData.items.map((item, index) => (
              <li key={index}>
                {Object.keys(item).map((key) => (
                  <div key={key}>
                    <strong>{fieldMapping[key]}:</strong> {item[key]}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </Box>
      )}
</Stack>
</Stack>
</div>
  )
}

export default Services