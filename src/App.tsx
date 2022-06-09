import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from 'theme';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from 'layout/navbar';
import MembersList from 'views/members/list';
import VehiclesList from 'views/vehicles/list';
import RefuelingsList from 'views/refuelings/list';
import MemberAdd from 'views/members/add/MemberAdd';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LocalizationProvider } from '@mui/x-date-pickers';
import RefuelingAdd from 'views/refuelings/add/RefuelingAdd';
import VehicleAdd from 'views/vehicles/add/VehicleAdd';
import MemberEdit from 'views/members/edit/MemberEdit';
import VehicleEdit from 'views/vehicles/edit/VehicleEdit';
import RefuelingEdit from 'views/refuelings/edit/RefuelingEdit';


const queryClient = new QueryClient();

function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Box>
              <Navbar/>
              <Routes>
                <Route path="/members" element={<MembersList/>}/>
                <Route path="/members/add" element={<MemberAdd/>}/>
                <Route path="/members/:id" element={<MemberEdit/>}/>
                <Route path="/vehicles" element={<VehiclesList/>}/>
                <Route path="/vehicles/add" element={<VehicleAdd/>}/>
                <Route path="/vehicles/:id" element={<VehicleEdit/>}/>
                <Route path="/refuelings" element={<RefuelingsList/>}/>
                <Route path="/refuelings/add" element={<RefuelingAdd/>}/>
                <Route path="/refuelings/:id" element={<RefuelingEdit/>}/>
              </Routes>
            </Box>
          </ThemeProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </LocalizationProvider>


  );
}

export default App;
