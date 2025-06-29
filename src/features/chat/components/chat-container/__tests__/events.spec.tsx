import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ChatContainer } from '..';

describe('ChatContainer component events tests', () => {
  beforeEach(() => {
    render(<ChatContainer />);
  });

  it('should erase input value when button is clicked', () => {
    const inputElement = screen.getByTestId('message-input');
    const buttonElement = screen.getByTestId('send-message-button');

    fireEvent.change(inputElement, 'dummy value');
    fireEvent.click(buttonElement);

    waitFor(() => {
      expect(inputElement).toHaveValue('');
    });
  });
});
