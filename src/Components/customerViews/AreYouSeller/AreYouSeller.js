import { Box, display } from '@mui/system'
import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import AYAS from "./AYAS.png"
import { Button } from '@mui/material';
import Typography  from '@mui/material/Typography';
import { Link } from 'react-router-dom';
Aos.init()
const AreYouSeller = () => {
  return (
    <div style={{height:"70vh"}}>
    <Box  width="100%" display= "flex"
    justifyContent= "space-around"
    alignContent= "space-around"
    alignItems= "center">
       <Box data-aos="fade-Up" data-aos-delay="200" width="50vw" display="grid" justifyContent="center">
       <Box my="1">
       <Typography variant="h3"  align="center"> Are You A Seller ? </Typography>
       </Box>
       <Box marginBlock="3" data-aos="fade-up" data-aos-delay="200" >
        <Link to={"/Seller"} style={{textDecoration:"none"}}>
        <Button size="large" variant='contained' sx={{backgroundColor:"#ec5858", borderRadius:3}} >Join Us</Button> 
        </Link></Box>
        </Box>
      <Box width="50vw" justifyContent="center" sx={{display:{lg:"block", xs:"none"}}}>
      <img height="100%" width="100%" src={AYAS} alt='img'></img>
      </Box>
      </Box>
    </div>
  )
}

export default AreYouSeller
