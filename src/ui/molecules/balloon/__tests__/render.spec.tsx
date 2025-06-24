import { render, screen } from '@testing-library/react';
import { Balloon } from '..';

describe('Balloon component render tests', () => {
  beforeEach(() => {
    render(<Balloon content="dummy content" timestamp={new Date()} />);
  });

  it('should render the content', () => {
    const element = screen.getByText(/dummy content/i);
    expect(element).toBeInTheDocument();
  });

  it('should render timestamp', () => {
    const element = screen.getByRole('time');
    expect(element).toBeInTheDocument();
  });
});
