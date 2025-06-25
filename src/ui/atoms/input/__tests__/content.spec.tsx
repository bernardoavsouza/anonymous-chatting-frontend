import { render } from '@testing-library/react';
import { Input } from '..';
import { screen } from '@testing-library/react';

describe('Input component content tests', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(<Input value="dummy value" onChange={() => {}} />);
  });

  it('should hold its value', () => {
    const element = screen.getByRole('textbox');
    expect(element).toHaveValue('dummy value');
  });
});
