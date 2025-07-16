import type { SocketIOClientMock } from '@/mocks/socket.io-client';
import { dummyMessage, mockedSocket } from '@/mocks/socket.io-client';
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

  it('should be able to remove the right callback with return function', () => {
    const client = SocketClient.getInstance();
    const firstMessageCallback = jest.fn();
    const secondMessageCallback = jest.fn();
    const joinCallback = jest.fn();

    client.listener.onEvent(SocketEvent.MESSAGE, firstMessageCallback);

    const removeSecondMessageCallback = client.listener.onEvent(
      SocketEvent.MESSAGE,
      secondMessageCallback,
    );

    client.listener.onEvent(SocketEvent.JOIN, joinCallback);

    removeSecondMessageCallback();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((client as any).socket as SocketIOClientMock).simulateIncomingEvent(
      SocketEvent.MESSAGE,
      dummyMessage.content,
    );

    expect(firstMessageCallback).toHaveBeenCalled();
    expect(firstMessageCallback).toHaveBeenCalledWith(dummyMessage.content);
    expect(secondMessageCallback).not.toHaveBeenCalled();
    expect(joinCallback).not.toHaveBeenCalled();
  });
});
