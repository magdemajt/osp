import React, { useCallback } from 'react';
import { generateURL } from 'config';
import MemberForm from 'views/members/form/MemberForm';

export default function MemberAdd() {

  const onSubmit = useCallback(async (value: any) => {

    await fetch(generateURL('members'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    });


  }, []);

  return (
    <MemberForm onSubmit={onSubmit} />
  )
}
