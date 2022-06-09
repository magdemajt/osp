import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

export default function RefuelingsTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Lokalizacja</TableCell>
        <TableCell align="right">Data</TableCell>
        <TableCell align="right">Cena paliwa</TableCell>
        <TableCell align="right">Typ paliwa</TableCell>
        <TableCell align="right">Ilość paliwa</TableCell>
      </TableRow>
    </TableHead>
  )
}
