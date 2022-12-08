import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Link, Typography } from '@mui/material';
import "./style.css"
import Action from './action';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [

  {
    name: "1",
    first: "John",
    last: "Smith",
    user: "	@js",
    email: "a@company.com",
    edit: "Edit",
    action: "Action",
    delete: "Delete",
    bagg:"#F9F9F9"
  },
  {
    name: "2",
    first: "Bill",
    last: "Digital",
    user: "	@bd",
    email: "bd@company.com",
    edit: "Edit",
    action: "Action",
    delete: "Delete",
    bag: "#DFF0D8"
  },
  {
    name: "3",
    first: "Marry",
    last: "James",
    user: "	@mj",
    email: "mj@company.com",
    edit: "Edit",
    action: "Action",
    delete: "Delete",
    bagg:"#F9F9F9"

  },
  {
    name: "4",
    first: "Carry",
    last: "Land",
    user: "	@cl",
    email: "cl@company.com",
    edit: "Edit",
    action: "Action",
    delete: "Delete"
  },
  {
    name: "5",
    first: "	New",
    last: "Caroline",
    user: "	@nc",
    email: "	nc@company.com",
    edit: "Edit",
    action: "Action",
    delete: "Delete",
    bag: "#DFF0D8",
    bagg:"#F9F9F9"


  },
  {
    name: "6",
    first: "	Martin",
    last: "East",
    user: "	@me",
    email: "	me@company.com",
    edit: "Edit",
    action: "Action",
    delete: "Delete",
    bag: "#F2DEDE"

  }
];

export default function Tabble() {
  return (
   

    <Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: '100% ', }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >#</TableCell>
              <TableCell align="left"sx={{fontSize:"16px  "}}>First Name</TableCell>
              <TableCell align="left"sx={{fontSize:"16px  "}}>Last Name</TableCell>
              <TableCell align="left"sx={{fontSize:"16px  "}}>User Name</TableCell>
              <TableCell align="left"sx={{fontSize:"16px  "}}>Email</TableCell>
              <TableCell align="left"sx={{fontSize:"16px  "}}>Edit</TableCell>
              <TableCell align="left"sx={{fontSize:"16px  "}}>Action</TableCell>
              <TableCell align="left"sx={{fontSize:"16px  "}}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow sx={{
                background: (row.bag)
              }}
              >
                <TableCell sx={{

                }}>
                  {row.name}
                </TableCell>
                <TableCell align="left" sx={{fontSize:"14px  "}}>{row.first}</TableCell>
                <TableCell align="left"sx={{fontSize:"14px  "}}>{row.last}</TableCell>
                <TableCell align="left"sx={{fontSize:"14px  "}}>{row.user}</TableCell>
                <TableCell align="left"sx={{fontSize:"14px  "}}>{row.email}</TableCell>
                <TableCell align="left"sx={{fontSize:"14px  "}}>

                  <Button sx={{
                    background: "white", borderRadius: "0", border: '1px solid  #ccc', "&:hover": {
                      background: "#e6e6e6",
                      borderColor: "#adadad"
                    }, color: "black",
                    fontSize:"14px"

                  }}>
                    {row.edit}
                  </Button>

                </TableCell>

                <TableCell align="left"sx={{fontSize:"14px  "}}><Action /></TableCell>
                <TableCell align="left"sx={{fontSize:"14px  "}}>

                  <Link sx={{ cursor: "pointer", textDecoration: "none" }}>
                    {row.delete}
                  </Link>
                </TableCell>


              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <Typography margin='2% 0' sx={{fontSize:"20px"}}>
      Another Table of Existing Users
      </Typography>


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: '100% ', }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >#</TableCell>
              <TableCell align="left"sx={{fontSize:"16px  "}}>First Name</TableCell>
              <TableCell align="left"sx={{fontSize:"16px  "}}>Last Name</TableCell>
              <TableCell align="left"sx={{fontSize:"16px  "}}>User Name</TableCell>
              <TableCell align="left"sx={{fontSize:"16px  "}}>Email</TableCell>
              <TableCell align="left"sx={{fontSize:"16px  "}}>Edit</TableCell>
              <TableCell align="left"sx={{fontSize:"16px  "}}>Action</TableCell>
              <TableCell align="left"sx={{fontSize:"16px  "}}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow sx={{
                background: (row.bagg)
              }}
              >
                <TableCell sx={{

                }}>
                  {row.name}
                </TableCell>
                <TableCell align="left"sx={{fontSize:"16px  "}}>{row.first}</TableCell>
                <TableCell align="left"sx={{fontSize:"16px  "}}>{row.last}</TableCell>
                <TableCell align="left"sx={{fontSize:"16px  "}}>{row.user}</TableCell>
                <TableCell align="left"sx={{fontSize:"16px  "}}>{row.email}</TableCell>
                <TableCell align="left"sx={{fontSize:"16px  "}}>

                  <Button sx={{
                    background: "white", borderRadius: "0", border: '1px solid  #ccc', "&:hover": {
                      background: "#e6e6e6",
                      borderColor: "#adadad"
                    }, color: "black",
                    fontSize:"14px"
                    // width:"100px"
                  }}>
                    {row.edit}
                  </Button>

                </TableCell>

                <TableCell align="left"sx={{fontSize:"14px  "}}><Action /></TableCell>
                <TableCell align="left"sx={{fontSize:"14px  "}}>

                  <Link sx={{ cursor: "pointer", textDecoration: "none" }}>
                    {row.delete}
                  </Link>
                </TableCell>


              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

  );
}