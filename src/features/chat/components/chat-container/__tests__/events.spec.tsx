import { useConversation } from '@/features/chat/hooks/use-conversation';
import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react';
import { ChatContainer } from '..';

describe('ChatContainer component events tests', () => {
  beforeEach(() => {
    render(<ChatContainer />);
  });

  it('should add only one message balloon per submit event', () => {
    const { result } = renderHook(() => useConversation());

    const inputElement = screen.getByTestId('message-input');
    const buttonElement = screen.getByTestId('send-message-button');

    fireEvent.change(inputElement, { target: { value: 'dummy value' } });
    fireEvent.click(buttonElement);

    waitFor(() => {
      expect(result.current.messages.length).toBe(1);
    });
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

  it('should not send message if input value is empty', () => {
    const button = screen.getByTestId('send-message-button');

    fireEvent.click(button);

    const ballon = screen.queryByTestId('message-balloon');

    expect(ballon).not.toBeInTheDocument();
  });
});
