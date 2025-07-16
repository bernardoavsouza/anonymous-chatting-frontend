import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from '..';

describe('Input component events tests', () => {
  let dummyFn: jest.Mock;
  beforeEach(() => {
    dummyFn = jest.fn();
    render(<Input onChange={dummyFn} />);
  });

  it('should fire onChange event when value is changed', () => {
    const element = screen.getByRole('textbox');
    fireEvent.change(element, { target: { value: 'dummy value' } });
    expect(dummyFn).toHaveBeenCalledTimes(1);
  });
});
