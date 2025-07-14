import type { SocketIOClientMock } from '@/mocks/socket.io-client';
import { mockedSocket } from '@/mocks/socket.io-client';
import { SocketClient } from '..';
import { SocketEvent } from '../types';

jest.mock('socket.io-client', () => mockedSocket);

describe('Socket listeners tests', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (SocketClient as any).instance = null;
  });

  it('should trigger message callbacks on message event', () => {
    const client = SocketClient.getInstance();
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    client.listener.onEvent(SocketEvent.Message, firstCallback);
    client.listener.onEvent(SocketEvent.Message, secondCallback);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((client as any).socket as SocketIOClientMock).simulateIncomingEvent(
      SocketEvent.Message,
      'dummy message',
    );

    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });
});
