import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { Input } from '..';

describe('Input component render tests', () => {
  beforeEach(() => {
    render(<Input placeholder="Input placeholder" />);
  });

  it('should be have input role', () => {
    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
  });

  it('should display the placeholder', () => {
    const element = screen.getByPlaceholderText('Input placeholder');
    expect(element).toBeInTheDocument();
  });
});
