import React from 'react';
import { render, screen } from '@testing-library/react';
import RefuelingsList from 'views/refuelings/list/index';

test('renders vehicles list', () => {
  render(<RefuelingsList />);
  const locationHeader = screen.getByText(/Lokalizacja/i);
  const fuelTypeHeader = screen.getByText(/Typ paliwa/i);
  expect(locationHeader).toBeInTheDocument();
  expect(fuelTypeHeader).toBeInTheDocument();
});
