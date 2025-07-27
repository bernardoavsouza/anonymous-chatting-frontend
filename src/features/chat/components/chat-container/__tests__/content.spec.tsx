import { ConversationProvider } from '@/hooks/use-conversation/conversation.provider';
import { fireEvent, render, screen } from '@testing-library/react';
import { ChatContainer } from '..';

describe('ChatContainer component content tests', () => {
  beforeEach(() => {
    render(<ChatContainer />, { wrapper: ConversationProvider });
  });

  it('should add only one message balloon per submit event', () => {
    const inputElement = screen.getByTestId('message-input');
    const buttonElement = screen.getByTestId('send-message-button');

    fireEvent.change(inputElement, { target: { value: 'dummy value' } });
    fireEvent.click(buttonElement);

    const balloons = screen.queryAllByTestId('message-balloon');

    expect(balloons.length).toBe(1);
  });

  it('should add new message balloon when a second message is sent', () => {
    const inputElement = screen.getByTestId('message-input');
    const buttonElement = screen.getByTestId('send-message-button');

    fireEvent.change(inputElement, { target: { value: 'dummy value' } });
    fireEvent.click(buttonElement);

    fireEvent.change(inputElement, { target: { value: 'dummy value 2' } });
    fireEvent.click(buttonElement);

    const firstBalloon = screen.getByText('dummy value');
    const secondBalloon = screen.getByText('dummy value 2');

    expect(firstBalloon).toBeInTheDocument();
    expect(secondBalloon).toBeInTheDocument();
  });
});
