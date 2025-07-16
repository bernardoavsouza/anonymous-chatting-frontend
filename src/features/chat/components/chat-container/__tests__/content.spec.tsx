import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ChatContainer } from '..';

describe('ChatContainer component content tests', () => {
  beforeEach(() => {
    render(<ChatContainer />);
  });

  it('should add a message balloon when message is sent', () => {
    const inputElement = screen.getByTestId('message-input');
    const buttonElement = screen.getByTestId('send-message-button');

    fireEvent.change(inputElement, 'dummy value');
    fireEvent.click(buttonElement);

    waitFor(() => {
      const balloon = screen.getByText('dummy value');
      expect(balloon).toBeInTheDocument();
    });
  });

  it('should add new message balloon when a second message is sent', () => {
    const inputElement = screen.getByTestId('message-input');
    const buttonElement = screen.getByTestId('send-message-button');

    fireEvent.change(inputElement, 'dummy value');
    fireEvent.click(buttonElement);

    fireEvent.change(inputElement, 'dummy value 2');
    fireEvent.click(buttonElement);

    waitFor(() => {
      const balloon = screen.getByText('dummy value');
      expect(balloon).toBeInTheDocument();
    });
  });

  it('should persist message balloon when another message is sent', () => {
    const inputElement = screen.getByTestId('message-input');
    const buttonElement = screen.getByTestId('send-message-button');

    fireEvent.change(inputElement, 'dummy value');
    fireEvent.click(buttonElement);

    fireEvent.change(inputElement, 'dummy value 2');
    fireEvent.click(buttonElement);

    waitFor(() => {
      const balloon = screen.getByText('dummy value');
      expect(balloon).toBeInTheDocument();
    });
  });
});
