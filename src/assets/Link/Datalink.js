import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function DataLinks() {
  return (
    <div role="presentation" onClick={handleClick} >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover"  href="/dashboard"style={{fontSize:"14px"}}>
        Admin Panel
        </Link>
        <Link
          underline="hover"
          href="/material-ui/getting-started/installation/"style={{fontSize:"14px"}}
        >
        Data Visualization
        </Link>
        <Link
          underline="hover"
          color="#777777"
          style={{fontSize:"14px"}}
          aria-current="page"
        >
         Charts
        </Link>
      </Breadcrumbs>
    </div>
  );
}