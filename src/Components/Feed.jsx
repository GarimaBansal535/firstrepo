import React from 'react'
import { Box } from '@mui/material';
import Post  from "../Components/Post.jsx"
import car from '../assets/images/car.jpg'
import mallroad from '../assets/images/mall road.jpg'
import road from '../assets/images/road.jpg'

export default function  Feed  () {
  
  return (
    <Box style={{flex:2,padding:10,display:{xs:'none',sm:'block'}}}>
      <Post image={mallroad}/>
      <Post image={car}/>
      <Post image={road} />
    </Box>
  )
}
