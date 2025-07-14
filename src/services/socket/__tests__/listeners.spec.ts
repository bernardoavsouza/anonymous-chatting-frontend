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

  it('should trigger event callbacks on incomming event', () => {
    const client = SocketClient.getInstance();
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    client.listener.onEvent(SocketEvent.MESSAGE, firstCallback);
    client.listener.onEvent(SocketEvent.JOIN, secondCallback);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((client as any).socket as SocketIOClientMock).simulateIncomingEvent(
      SocketEvent.MESSAGE,
      'message payload',
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((client as any).socket as SocketIOClientMock).simulateIncomingEvent(
      SocketEvent.JOIN,
      'join payload',
    );

    expect(firstCallback).toHaveBeenCalledTimes(1);
    expect(firstCallback).toHaveBeenCalledWith('message payload');
    expect(secondCallback).toHaveBeenCalledTimes(1);
    expect(secondCallback).toHaveBeenCalledWith('join payload');
  });
});
