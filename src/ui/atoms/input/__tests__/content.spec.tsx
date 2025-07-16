import { render, screen } from '@testing-library/react';
import { Input } from '..';

describe('Input component content tests', () => {
  beforeEach(() => {
    render(<Input value="dummy value" onChange={() => {}} />);
  });

  it('should hold its value', () => {
    const element = screen.getByRole('textbox');
    expect(element).toHaveValue('dummy value');
  });
});
