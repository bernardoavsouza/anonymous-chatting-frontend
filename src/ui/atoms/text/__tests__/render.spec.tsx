import { render, screen } from '@testing-library/react';
import { Text } from '..';

describe('Text component render tests', () => {
  beforeEach(() => {
    render(<Text>Hello</Text>);
  });

  it('should render the content', () => {
    const element = screen.getByText(/hello/i);
    expect(element).toBeInTheDocument();
  });

  it('should be a paragraph by default', () => {
    const element = screen.getByRole('paragraph');
    expect(element).toBeInTheDocument();
  });
});
