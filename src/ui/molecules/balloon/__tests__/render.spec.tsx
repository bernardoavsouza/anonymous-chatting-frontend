import { render, screen } from '@testing-library/react';
import { Balloon } from '..';

describe('Balloon component render tests', () => {
  render(<Balloon content="dummy content" />);

  it('should render the content', () => {
    const element = screen.getByRole('paragraph');
    expect(element).toBeInTheDocument();
  });
});
