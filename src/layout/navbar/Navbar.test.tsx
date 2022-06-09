import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'App';

test('renders navbar', async () => {
  render(<App />);
  const membersLink = await screen.findAllByText(/Członkowie/i);
  const refuelingsLink = await screen.findAllByText(/Tankowania/i);
  expect(membersLink).toHaveLength(2);
  expect(refuelingsLink).toHaveLength(2);
});

// test('it redirects to vehicles page', () => {
//   render(<BrowserRouter><Navbar /></BrowserRouter>);
//   const vehiclesLink = screen.getByText(/Pojazdy/i);
//   vehiclesLink.click();
//   expect(window.location.pathname).toBe('/vehicles');
// });
//
// test('it redirects to members page', () => {
//   render(<BrowserRouter><Navbar /></BrowserRouter>);
//   const membersLink = screen.getByText(/Członkowie/i);
//   membersLink.click();
//   expect(window.location.pathname).toBe('/members');
// });
//
// test('it redirects to refuelings page', () => {
//   render(<BrowserRouter><Navbar /></BrowserRouter>);
//   const refuelingsLink = screen.getByText(/Tankowania/i);
//   refuelingsLink.click();
//   expect(window.location.pathname).toBe('/refuelings');
// });
