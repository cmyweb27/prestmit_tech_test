import React from "react";
import {
  Button,
  Container,
  Typography,
  TextField,
  Box,
  
} from "@mui/material";
export default function Section_seven() {
  
  return (
    <Container className="mt-12 ">
      <Box sx={{backgroundSize:'50%'}} className="bg-blue grid place-items-center rounded-xl py-12 bg-no-repeat bg-right-top  bg-[url(https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/Ellipse_section7.png)] " >
      <Typography className="text-3xl md:w-1/3 text-center text-white">
        An enterprise template to ramp up your company website
      </Typography>
      <div className='md:flex grid place-items-center'>
        
      
        <div className='mt-3 p-3'>
        <input placeholder="Your Email Address" className='p-3 px-6 rounded-full '/> 
        </div>
        <div className='mt-3 p-3'>
        <Button variant="contained" className="rounded-full bg-green p-3 px-9">
          <Typography className="text-blue font-semibold capitalize">start now</Typography>
        </Button>
       
      </div>
      </div>
      </Box>
    </Container>
  );
}
