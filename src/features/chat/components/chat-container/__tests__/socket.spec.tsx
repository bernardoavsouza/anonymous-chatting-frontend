import { mockDate } from '@/mocks/date';
import {
  dummyMessage,
  dummyTimestamp,
  mockedSocket,
} from '@/mocks/socket.io-client';
import { SocketClient } from '@/services/socket';
import type { EventPayload, InputPort } from '@/services/socket/types';
import { SocketEvent } from '@/services/socket/types';
import { resetSocket } from '@/services/socket/utils';
import { act, fireEvent, render, screen } from '@testing-library/react';
import type { Socket } from 'socket.io-client';
import { ChatContainer } from '..';

jest.mock('socket.io-client', () => mockedSocket);

describe('ChatContainer component socket tests', () => {
  beforeAll(() => {
    mockDate();
  });

  beforeEach(() => {
    resetSocket();

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

    const payload: InputPort<EventPayload> = {
      data: dummyMessage,
      timestamp: dummyTimestamp,
    };
    expect(socket.emit).toHaveBeenCalledWith(SocketEvent.MESSAGE, payload);
  });

  it('should not emmit message event when input value is empty', () => {
    const button = screen.getByTestId('send-message-button');
    fireEvent.click(button);

    const client = SocketClient.getInstance();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const socket = (client as any).socket as Socket;

    expect(socket.emit).not.toHaveBeenCalled();
  });

  it('should display message when a message event is received', () => {
    act(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (SocketClient.getInstance() as any).socket.simulateIncomingEvent(
        SocketEvent.MESSAGE,
        {
          ...dummyMessage,
          direction: 'incoming',
        },
      );
    });

    const message = screen.queryByTestId('message-balloon');

    expect(message).toHaveTextContent(dummyMessage.content);
  });
});
