import { render } from '@testing-library/react';
import { Input } from '..';
import { screen } from '@testing-library/react';

describe('Input component content tests', () => {
  beforeEach(() => {
    render(<Input value="dummy value" />);
  });

  it('should hold its value', () => {
    const element = screen.getByRole('textbox');
    expect(element).toHaveValue('dummy value');
  });
});
