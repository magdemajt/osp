import React from 'react';
import { Button, CircularProgress, TableBody, TableCell, TableRow } from '@mui/material';
import { useQuery } from 'react-query';
import { generateURL } from 'config';
import { useNavigate } from 'react-router-dom';

interface Member {
  _id: number;
  name: string;
  email: string;
  role: string;
  phone: string;
}

export default function MemberTableBody() {
  const navigate = useNavigate();

  const {data, isLoading, isError, refetch} = useQuery('members', async () => {
    const response = await fetch(generateURL('members'));
    return response.json();
  });

  if (isLoading) {
    return <TableRow>
      <TableCell colSpan={4}>
        <CircularProgress />
      </TableCell>
    </TableRow>
  }

  if (isError) {
    return <TableRow>
      <TableCell colSpan={4}>
        Nie można pobrać danych <Button onClick={() => refetch()} variant="text">spróbuj ponownie</Button>
      </TableCell>
    </TableRow>
  }

  return (
    <TableBody>
      {data.map((row: any) => (
        <TableRow
          key={row._id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 }, 'cursor': 'pointer' }}
          onClick={() => navigate(`/members/${row._id}`)}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.email}</TableCell>
          <TableCell align="right">{row.role}</TableCell>
          <TableCell align="right">{row.phone}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
