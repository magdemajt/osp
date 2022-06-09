import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import FormTextField from 'components/FormTextField';
import FormDatePicker from 'components/FormDatePicker';
import { formatISO } from 'date-fns';

export default function VehicleForm({ initialValues, onSubmit }: {onSubmit: (values: any) => {}; initialValues?: any}) {
  const methods = useForm({
    defaultValues: initialValues || {},
  });

  const parsedOnSubmit = (values: any) => {
    const policyExpiration = values.insurance?.policyExpirationDate && formatISO(values.insurance.policyExpirationDate);
    const technicalReviewExpiry = values.technicalReviewExpiry && formatISO(values.technicalReviewExpiry);
    return onSubmit({
      ...values,
      insurance: {
        ...values.insurance,
        policyExpiration,
      },
      technicalReviewExpiry,
    })
  }

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardHeader title="Dane członka"/>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormTextField name="name" label="Nazwa pojazdu" type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="model" label="Model pojazdu" type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="year" label="Rocznik" type="number"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="registrationNumber" label="Nr rejestracyjny" type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="insurance.insuranceCompany" label="Nazwa ubezpieczyciela" type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="insurance.policyNumber" label="Nr polisy" type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormDatePicker label="Termin ważności polisy" name="insurance.policyExpirationDate" />
                  </Grid>
                  <Grid item xs={12}>
                    <FormDatePicker label="Termin ważności przeglądu" name="technicalReviewExpiry" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardHeader title="Kwalifikacje i odznaczenia"/>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormTextField name="fuelConsumptionStandard" label="Norma spalania"
                                   type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="oilStandard" label="Norma oleju"
                                   type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="fuelType" label="Typ paliwa" type="text"/>
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
        </Grid>
      </Box>
    </FormProvider>

  )
}
