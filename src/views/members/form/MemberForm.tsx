import React from 'react';
import { Box, Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import FormTextField from 'components/FormTextField';

export default function MemberForm({ initialValues, onSubmit }: {onSubmit: (values: any) => {}; initialValues?: any}) {

  const parsedOnSubmit = (values: any) => {
    const {qualifications, operations, decorations, certifications, ...rest} = values;

    const realQualifications = qualifications?.split(',').map((q: string) => q.trim()) || [];
    const realOperations = operations?.split(',').map((o: string) => o.trim()) || [];
    const realDecorations = decorations?.split(',').map((d: string) => d.trim()) || [];
    const realCertifications = certifications?.split(',').map((c: string) => c.trim()) || [];
    return onSubmit({
      ...rest,
      qualifications: realQualifications,
      operations: realOperations,
      decorations: realDecorations,
      certifications: realCertifications
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
              <CardHeader title="Dane członka"/>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormTextField name="name" label="Imię i nazwisko" type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="email" label="Adres email" type="email"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="role" label="Rola" type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="address" label="Adres zamieszkania" type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="phone" label="Numer telefonu" type="tel"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="type" label="Typ" type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="group" label="Grupa" type="text"/>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Kwalifikacje i odznaczenia"/>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormTextField name="qualifications" label="Kwalifikacje (,)"
                                   type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="decorations" label="Odznaczenia (,)"
                                   type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="inventory" label="Wyposażenie (,)" type="text"/>
                  </Grid>
                  <Grid item xs={12}>
                    <FormTextField name="certifications" label="Szkolenia (,)"
                                   type="text"/>
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
