import React from 'react';
import { TableCell, TableBody, TableRow, CircularProgress, Button } from '@mui/material';
import { useQuery } from 'react-query';
import { generateURL } from 'config';
import { useNavigate } from 'react-router-dom';

interface Vehicle {
  _id: string;
  name: string;
  model: string;
  year: number;
  registrationNumber: string;
  fuelType: string;
}

export default function VehiclesTableBody() {

  const {data, isLoading, isError, refetch} = useQuery('vehicles', async () => {
    const response = await fetch(generateURL('vehicles'));
    return response.json();
  });

  const navigate = useNavigate();

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

  const rows: Vehicle[]  = data;
  return (
    <TableBody>
      {rows.map((row: Vehicle) => (
        <TableRow key={row._id} onClick={() => navigate(`/vehicles/${row._id}`)}>
          <TableCell>{row.name}</TableCell>
          <TableCell align="right">{row.model}</TableCell>
          <TableCell align="right">{row.year}</TableCell>
          <TableCell align="right">{row.registrationNumber}</TableCell>
          <TableCell align="right">{row.fuelType}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
