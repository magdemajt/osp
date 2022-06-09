import React from 'react';
import CustomTable from 'components/CustomTable';
import RefuelingsTableHead from 'views/refuelings/list/RefuelingsTableHead';
import RefuelingsTableBody from 'views/refuelings/list/RefuelingsTableBody';
import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function RefuelingsList() {


  return (
    <Box>
      <Box m={2} display="flex">
        <Box flexGrow={1} />
        <Button color="secondary" component={NavLink} to="/refuelings/add">
          Dodaj tankowanie
        </Button>
      </Box>
      <CustomTable>
        <RefuelingsTableHead />
        <RefuelingsTableBody />
      </CustomTable>
    </Box>

  );
}
