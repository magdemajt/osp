import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

export default function VehiclesTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Marka</TableCell>
        <TableCell align="right">Model</TableCell>
        <TableCell align="right">Rok produkcji</TableCell>
        <TableCell align="right">Numer rejestracyjny</TableCell>
        <TableCell align="right">Typ paliwa</TableCell>
      </TableRow>
    </TableHead>
  )
}
