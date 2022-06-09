import React, { useCallback } from 'react';
import { generateURL } from 'config';
import VehicleForm from 'views/vehicles/form/VehicleForm';

export default function VehicleAdd() {
  const onSubmit = useCallback(async (value: any) => {

    await fetch(generateURL('vehicles'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    });


  }, []);

  return (
    <VehicleForm onSubmit={onSubmit} />
  )
}
