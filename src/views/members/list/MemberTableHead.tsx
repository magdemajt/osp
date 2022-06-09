import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';

export default function MemberTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Imię i nazwisko</TableCell>
        <TableCell align="right">Email</TableCell>
        <TableCell align="right">Rola</TableCell>
        <TableCell align="right">Nr telefonu</TableCell>
      </TableRow>
    </TableHead>
  )
}
