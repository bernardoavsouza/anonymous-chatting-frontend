import { render, screen } from '@testing-library/react';
import { Check } from 'lucide-react';
import { Button } from '..';

describe('Button component content tests', () => {
  it('should display the content when provided', () => {
    render(<Button>dummy text</Button>);
    const element = screen.getByText(/dummy text/i);
    expect(element).toBeInTheDocument();
  });

  it('should not display children text tag when not provided', () => {
    render(<Button />);
    const element = screen.queryByRole('paragraph');
    expect(element).not.toBeInTheDocument();
  });

  it('should display left icon when provided', () => {
    render(<Button leftIcon={Check} />);
    const element = screen.queryByRole('img');
    expect(element).toBeInTheDocument();
  });

  it('should display right icon when provided', () => {
    render(<Button rightIcon={Check} />);
    const element = screen.queryByRole('img');
    expect(element).toBeInTheDocument();
  });

  it('should not display any icon when not provided', () => {
    render(<Button />);
    const element = screen.queryByRole('img');
    expect(element).not.toBeInTheDocument();
  });
});
