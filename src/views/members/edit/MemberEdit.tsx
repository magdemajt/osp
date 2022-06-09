import React, { useCallback } from 'react';
import { generateURL } from 'config';
import MemberForm from 'views/members/form/MemberForm';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Box, Button, CircularProgress, TableCell, TableRow } from '@mui/material';

export default function MemberEdit() {

  const { id } = useParams();

  const {data, isError, isLoading, refetch} = useQuery(['member', id], async () => {
    return fetch(generateURL(`members/${id}`)).then(res => res.json());
  });

  const onSubmit = useCallback(async (value: any) => {

    await fetch(generateURL(`members/${id}`), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
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

  const member = {
    ...data,
    qualifications: data.qualifications?.join(','),
    operations: data.operations?.join(','),
    decorations: data.decorations?.join(','),
    certifications: data.certifications?.join(','),
  }

  return (
    <MemberForm onSubmit={onSubmit} initialValues={member}/>
  )
}
