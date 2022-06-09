import React, { useCallback } from 'react';
import { generateURL } from 'config';
import { formatISO, parseISO } from 'date-fns';
import RefuelingsForm from 'views/refuelings/form/RefuelingsForm';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Box, Button, CircularProgress } from '@mui/material';
export default function RefuelingEdit() {
  const { id } = useParams();

  const { data, isError, isLoading, refetch } = useQuery(['refueling', id], useCallback(async () => {
    return fetch(generateURL(`fuelings/${id}`)).then(res => res.json());
  }, [id]));


  const onSubmit = useCallback(async (values: any) => {

    const date = values.date;

    await fetch(generateURL(`fuelings/${id}`), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...values,
      }),
    });

  }, [id]);

  if (isLoading) {
    return <Box>
      <CircularProgress />
    </Box>
  }

  if (isError) {
    return <Box>
      Nie można pobrać danych <Button onClick={() => refetch()} variant="text">spróbuj ponownie</Button>
    </Box>
  }

  const initialValues = {
    ...data,
    date: data.date && parseISO(data.date),
  };

  return (
    <RefuelingsForm onSubmit={onSubmit} initialValues={initialValues} />
  )
}
