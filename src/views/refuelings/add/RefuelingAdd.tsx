import React, { useCallback } from 'react';
import { generateURL } from 'config';
import RefuelingsForm from 'views/refuelings/form/RefuelingsForm';
export default function RefuelingAdd() {

  const onSubmit = useCallback(async (values: any) => {

    await fetch(generateURL('fuelings'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

  }, []);

  return (
    <RefuelingsForm onSubmit={onSubmit} />
  )
}
