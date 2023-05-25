import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('NavBar', () => {
  test('renders NavBar component',()=>{
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
      )

    const navBarElement = screen.getByText(/Home/i);
    const navBarElement2 = screen.getByText(/Create Recipe/i);

    expect(navBarElement).toBeInTheDocument();
    expect(navBarElement2).toBeInTheDocument();
  })
  test('applies active class to active link', () => {
    render(
      <MemoryRouter initialEntries={['/createRecipe']}>
        <NavBar />
      </MemoryRouter>
    );
    expect(screen.getByText('Create Recipe')).toHaveClass('active');
});
})