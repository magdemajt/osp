import React from 'react';
import { render, screen } from '@testing-library/react';
import VehiclesList from 'views/vehicles/list/index';

test('renders vehicles list', () => {
  render(<VehiclesList />);
  const nameHeader = screen.getByText(/Marka/i);
  const modelHeader = screen.getByText(/Model/i);
  expect(nameHeader).toBeInTheDocument();
  expect(modelHeader).toBeInTheDocument();
});
