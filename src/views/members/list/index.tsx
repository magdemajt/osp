import React from 'react';
import MemberTableHead from 'views/members/list/MemberTableHead';
import MemberTableBody from 'views/members/list/MemberTableBody';
import CustomTable from 'components/CustomTable';
import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';


export default function MembersList() {
  return (
    <Box>
      <Box m={2} display="flex">
        <Box flexGrow={1} />
        <Button color="secondary" component={NavLink} to="/members/add">
          Dodaj członka
        </Button>
      </Box>
      <CustomTable>
        <MemberTableHead />
        <MemberTableBody />
      </CustomTable>
    </Box>
  );
}
