import React from 'react';
import { render, screen } from '@testing-library/react';
import MembersList from 'views/members/list/index';

test('renders member list', () => {
  render(<MembersList />);
  const nameHeader = screen.getByText(/Imię i nazwisko/i);
  const roleElement = screen.getByText(/Rola/i);
  expect(nameHeader).toBeInTheDocument();
  expect(roleElement).toBeInTheDocument();
});
