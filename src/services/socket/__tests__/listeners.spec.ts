import type { SocketIOClientMock } from '@/mocks/socket.io-client';
import { dummyMessage, mockedSocket } from '@/mocks/socket.io-client';
import { SocketClient } from '..';
import { SocketEvent } from '../types';

jest.mock('socket.io-client', () => mockedSocket);

describe('Socket listeners tests', () => {
  let client: SocketClient;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (SocketClient as any).instance = null;
    client = SocketClient.getInstance();
  });

  it('should trigger event callbacks on incomming event', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    client.listener.onEvent(SocketEvent.MESSAGE, firstCallback);
    client.listener.onEvent(SocketEvent.JOIN, secondCallback);

    const messagePayload = { ...dummyMessage, content: 'message payload' };
    const joinPayload = { ...dummyMessage, content: 'join payload' };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((client as any).socket as SocketIOClientMock).simulateIncomingEvent(
      SocketEvent.MESSAGE,
      messagePayload,
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((client as any).socket as SocketIOClientMock).simulateIncomingEvent(
      SocketEvent.JOIN,
      joinPayload,
    );

    expect(firstCallback).toHaveBeenCalledTimes(1);
    expect(firstCallback).toHaveBeenCalledWith(messagePayload);
    expect(secondCallback).toHaveBeenCalledTimes(1);
    expect(secondCallback).toHaveBeenCalledWith(joinPayload);
  });

  it('should be able to remove the right callback with return function', () => {
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
      dummyMessage,
    );

    expect(firstMessageCallback).toHaveBeenCalled();
    expect(firstMessageCallback).toHaveBeenCalledWith(dummyMessage);
    expect(secondMessageCallback).not.toHaveBeenCalled();
    expect(joinCallback).not.toHaveBeenCalled();
  });
});
