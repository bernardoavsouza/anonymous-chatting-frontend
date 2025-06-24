import { render, screen } from '@testing-library/react';
import { Balloon } from '..';

describe('Balloon component content tests', () => {
  render(<Balloon content="dummy content" />);

  it('should render the content', () => {
    const element = screen.getByText(/dummy content/i);
    expect(element).toBeInTheDocument();
  });
});
