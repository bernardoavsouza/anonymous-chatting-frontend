import { render, screen } from '@testing-library/react';
import { Button } from '..';

describe('Button component render tests', () => {
  beforeEach(() => {
    render(<Button>My button</Button>);
  });

  it('should be a button', () => {
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  it('should render the content', () => {
    const element = screen.getByText(/my button/i);
    expect(element).toBeInTheDocument();
  });
});
