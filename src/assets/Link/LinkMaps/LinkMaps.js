import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Links() {
  return (
    <Box role="presentation" onClick={handleClick} >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover"  href="/"style={{fontSize:"14px"}}>
        Admin Panel
        </Link>
        <Link
          underline="hover"
          href="/material-ui/getting-started/installation/"style={{fontSize:"14px"}}
        >
         Maps
        </Link>
        <Link
          underline="hover"
          color="#777777"
          style={{fontSize:"14px"}}
          aria-current="page"
        >
         Location
        </Link>
      </Breadcrumbs>
    </Box>
  );
}