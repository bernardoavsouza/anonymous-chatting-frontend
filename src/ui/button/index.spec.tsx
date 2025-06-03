import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button component render tests', () => {
  beforeEach(() => {
    render(<Button>My button</Button>);
  });

  it('should be a button tag', () => {
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

  it('should render the content', () => {
    const element = screen.getByText(/my button/i);
    expect(element).toBeInTheDocument();
  });
});

describe('Button component event tests', () => {
  let onClick: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn();
  });

  it('should fire onClick event when clicked', () => {
    render(<Button onClick={onClick}>My button</Button>);

    const element = screen.getByRole('button');
    fireEvent.click(element);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("shouldn't fire onClick event if clicked when disabled", () => {
    render(
      <Button disabled onClick={onClick}>
        My button
      </Button>,
    );

    const element = screen.getByRole('button');
    fireEvent.click(element);
    expect(onClick).not.toHaveBeenCalled();
  });
});
