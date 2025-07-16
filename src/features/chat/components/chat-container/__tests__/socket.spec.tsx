import { dummyMessage, mockedSocket } from '@/mocks/socket.io-client';
import { SocketClient } from '@/services/socket';
import { SocketEvent } from '@/services/socket/types';
import { fireEvent, render, screen } from '@testing-library/react';
import type { Socket } from 'socket.io-client';
import { ChatContainer } from '..';

jest.mock('socket.io-client', () => mockedSocket);

describe('ChatContainer component socket tests', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (SocketClient as any).instance = null;

    jest.spyOn(global, 'Date').mockImplementation(() => dummyMessage.timestamp);

    render(<ChatContainer />);
  });

  it('should send message event when send button is clicked', () => {
    const input = screen.getByTestId('message-input');
    fireEvent.change(input, { target: { value: dummyMessage.content } });

    const button = screen.getByTestId('send-message-button');
    fireEvent.click(button);

    const client = SocketClient.getInstance();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const socket = (client as any).socket as Socket;

    expect(socket.emit).toHaveBeenCalledWith(SocketEvent.MESSAGE, dummyMessage);
  });

  it('should not emmit message event when input value is empty', () => {
    const button = screen.getByTestId('send-message-button');
    fireEvent.click(button);

    const client = SocketClient.getInstance();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const socket = (client as any).socket as Socket;

    expect(socket.emit).not.toHaveBeenCalled();
  });
  // it('should display message when a message event is received');
});
