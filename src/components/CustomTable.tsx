import React from 'react';
import { Box, Grid, Paper, Table, TableContainer } from '@mui/material';

export default function CustomTable({ children }: { children: React.ReactNode }) {
  return (
    <Box p={2}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              {children}
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  )
}
