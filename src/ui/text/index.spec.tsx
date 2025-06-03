import { render, screen } from '@testing-library/react';
import { Text } from '.';

describe('Text component unit tests', () => {
  beforeEach(() => {
    render(<Text>Hello</Text>);
  });

  it('should render the content', () => {
    const element = screen.getByText(/hello/i);
    expect(element).toBeInTheDocument();
  });

  it('should be a p tag', () => {
    const element = screen.getByRole('paragraph');
    expect(element).toBeInTheDocument();
  });
});
