import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import FormTextField from 'components/FormTextField';
import { apiURL, generateURL } from 'config';
import FormDatePicker from 'components/FormDatePicker';
import { formatISO } from 'date-fns';

function CompanyDetails({ namePrefix, title }: { namePrefix: string; title: string }) {
  return (
    <Card>
      <CardHeader title={title}/>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormTextField name={`${namePrefix}.name`} label="Nazwa"
                           type="text" required/>
          </Grid>
          <Grid item xs={12}>
            <FormTextField name={`${namePrefix}.nipNumber`} label="Numer NIP"
                           type="text"/>
          </Grid>
          <Grid item xs={12}>
            <FormTextField name={`${namePrefix}.vatNumber`} label="Numer VAT" type="text"/>
          </Grid>
          <Grid item xs={12}>
            <FormTextField name={`${namePrefix}.regonNumber`} label="Numer REGON"
                           type="text"/>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  )
}

export default function RefuelingsForm({ initialValues, onSubmit }: {onSubmit: (values: any) => {}; initialValues?: any}) {

  const parsedOnSubmit = (values: any) => {
    return onSubmit({
      ...values,
      date: values.date && formatISO(values.date as Date),
    });

  }

  const methods = useForm({
    defaultValues: initialValues || {},
  });

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Dane tankowania"/>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormDatePicker name="date" label="Data tankowania"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="fuelType" label="Typ paliwa" type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="fuelPrice" label="Cena paliwa" type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="fuelAmount" label="Ilość paliwa" type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="location.name" label="Stacja paliwa" type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="invoiceNumber" label="Nr faktury" type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit" onClick={handleSubmit(parsedOnSubmit)}>
                      Dodaj
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <CompanyDetails namePrefix="sellerDetails" title="Dane sprzedającego"/>
          </Grid>
          <Grid item xs={12} md={6}>
            <CompanyDetails namePrefix="buyerDetails" title="Dane kupującego"/>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  )
}
