import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from '../pages/Contact';

describe('Contact page', () => {
  it('shows the grouped details sections and key contact actions', () => {
    render(<Contact />);

    expect(screen.getByRole('heading', { name: /Talk to a real human/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Your details/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Vehicle details/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /open in maps/i })).toBeInTheDocument();
  });
});
