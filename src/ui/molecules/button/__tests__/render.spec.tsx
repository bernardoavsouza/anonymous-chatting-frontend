import { render, screen } from '@testing-library/react';
import { Button } from '..';

describe('Button component render tests', () => {
  beforeEach(() => {
    render(<Button />);
  });

  it('should be a button', () => {
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });
});
