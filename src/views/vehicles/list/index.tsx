import React from 'react';
import CustomTable from 'components/CustomTable';
import VehiclesTableHead from 'views/vehicles/list/VehiclesTableHead';
import VehiclesTableBody from 'views/vehicles/list/VehiclesTableBody';
import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function VehiclesList() {
  return (
    <Box>
      <Box display="flex" p={2}>
        <Box flexGrow={1} />
        <Button color="secondary" component={NavLink} to="/vehicles/add">
          Dodaj pojazd
        </Button>
      </Box>
      <CustomTable>
        <VehiclesTableHead />
        <VehiclesTableBody />
      </CustomTable>
    </Box>

  );
}
