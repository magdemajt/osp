import React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { RegisterOptions, useController } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

export interface FormTextFieldProps {
  label: string;
  name: string;
  rules?: RegisterOptions;
}

export default function FormDatePicker(props: FormTextFieldProps) {

  const { field: { name, ref, value, onChange, onBlur } } = useController({
    name: props.name,
    rules: props.rules || {},
    defaultValue: ''
  });

  return <DatePicker
    label={props.label}
    value={value}
    onChange={onChange}
    inputRef={ref}
    renderInput={(params) => <TextField {...params} name={name} onBlur={onBlur} />}
   />;
}
