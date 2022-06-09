import React, { useCallback } from 'react';
import { generateURL } from 'config';
import VehicleForm from 'views/vehicles/form/VehicleForm';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Box, Button, CircularProgress } from '@mui/material';
import { parseISO } from 'date-fns';

export default function VehicleEdit() {

  const { id } = useParams();

  const { data, isError, isLoading, refetch } = useQuery(['vehicles', id], () => fetch(generateURL(`vehicles/${id}`)).then(res => res.json()));

  const onSubmit = useCallback(async (value: any) => {

    await fetch(generateURL(`vehicles/${id}`), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
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
    insurance: data.insurance && {
      ...data.insurance,
      policyExpirationDate: data.insurance.policyExpirationDate && parseISO(data.insurance.policyExpirationDate)
    },
    technicalReviewExpiry: data.technicalReviewExpiry && parseISO(data.technicalReviewExpiry)
  }

  return (
    <VehicleForm onSubmit={onSubmit} initialValues={initialValues} />
  )
}
