import { render, screen } from '@testing-library/react';
import { Button } from '..';

describe('Button component content tests', () => {
  beforeEach(() => {
    render(<Button text="dummy text" />);
  });

  it('should display the content', () => {
    const element = screen.getByText(/dummy text/i);
    expect(element).toBeInTheDocument();
  });
});
