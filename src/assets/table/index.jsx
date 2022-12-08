import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./style.css"
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1,'Jhon', 'Smith', '@js'),
  createData(2,'Bill', "Jones", "@bd"),
  createData(3,'Marry', "jones", "@db"),
    ];

export default function Tables() {
  return (
    <TableContainer component={Paper}  id="aca">
      <Table sx={{ minWidth: '100% ', }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ml:"-2%"}}>
            <TableCell >#</TableCell>
            <TableCell sx={{fontSize:"13px  ", fontWeight:"700"}} align="left">First Name</TableCell>
            <TableCell sx={{fontSize:"13px  ", fontWeight:"700"}} align="left">Last Name</TableCell>
            <TableCell sx={{fontSize:"13px  ", fontWeight:"700"}} align="left">User Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            >
              <TableCell  sx={{fontSize:"13px  "}}>
                {row.name}
              </TableCell>
              <TableCell sx={{fontSize:"13px  "}} align="left">{row.calories}</TableCell>
              <TableCell sx={{fontSize:"13px  "}} align="left">{row.fat}</TableCell>
              <TableCell sx={{fontSize:"13px  "}} align="left">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}