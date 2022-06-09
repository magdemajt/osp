import React, { useState } from 'react';
import { TableCell, TableBody, TableRow, CircularProgress, Button } from '@mui/material';
import { useQuery } from 'react-query';
import { generateURL } from 'config';
import { ISOString } from 'utlis/types';
import { format, parseISO } from 'date-fns';
import { useNavigate } from 'react-router-dom';

interface Refueling {
  _id: string;
  fuelType: string;
  fuelPrice: string;
  fuelAmount: string;
  date: ISOString;
  location: {
    name: string;
  }
}

export default function RefuelingsTableBody() {

  const navigate = useNavigate();
  const [date, setDate] = useState<string | undefined>();

  const {data, isLoading, isError, refetch} = useQuery('fuelings', async () => {
    const response = await fetch(generateURL('fuelings'));
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

  const rows: Refueling[] = data;
  return (
    <TableBody>
      {rows.map((row: Refueling) => (
        <TableRow key={row._id} onClick={() => navigate(`/refuelings/${row._id}`)}>
          <TableCell>{row.location.name}</TableCell>
          <TableCell align="right">{format(parseISO(row.date), 'dd-MM-yyyy')}</TableCell>
          <TableCell align="right">{row.fuelPrice}</TableCell>
          <TableCell align="right">{row.fuelType}</TableCell>
          <TableCell align="right">{row.fuelAmount}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
