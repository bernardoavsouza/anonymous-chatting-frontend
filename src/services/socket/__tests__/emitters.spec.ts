import { dummyMessage, mockedSocket } from '@/mocks/socket.io-client';
import type { Socket } from 'socket.io-client';
import { SocketClient } from '..';
import { SocketEvent } from '../types';

jest.mock('socket.io-client', () => mockedSocket);

describe('Socket emitters tests', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (SocketClient as any).instance = null;
  });

  it('should emit event when emitEvent method is called', () => {
    const client = SocketClient.getInstance();
    const event = SocketEvent.MESSAGE;
    const payload = dummyMessage;

    client.emitter.emitEvent(event, payload);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const socket = (client as any).socket as Socket;
    expect(socket.emit).toHaveBeenCalledWith(event, payload);
  });
});
