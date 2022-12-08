import React from 'react';
import Navbar from '../../components/Navbar';
import Saidbar from '../../components/Saidbar/Navbar2';
import Futr from '../../components/futr/Navbar3';
import { Box } from '@mui/material';
import Router from '../../routes/Router';
export default () => (
  <div>
    <Navbar />
    <Box sx={{display:"flex"}}>
    <Saidbar />
     <Router/>
    </Box>
    <Futr/>
  </div>
);
