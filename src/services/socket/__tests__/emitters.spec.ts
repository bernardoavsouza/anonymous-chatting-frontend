import { mockDate } from '@/mocks/date';
import { dummyMessage, dummyTimestamp } from '@/mocks/dummys';
import { mockedSocket } from '@/mocks/socket.io-client';
import type { Socket } from 'socket.io-client';
import { SocketClient } from '..';
import type { InputPort } from '../types/base.types';
import type { EventPayload } from '../types/events.types';
import { SocketEvent } from '../types/events.types';
import { resetSocket } from '../utils';

jest.mock('socket.io-client', () => mockedSocket);

describe('Socket emitters tests', () => {
  beforeAll(() => {
    mockDate();
  });

  beforeEach(() => {
    resetSocket();
  });

  it('should emit event when emitEvent method is called', () => {
    const client = SocketClient.getInstance();
    const event = SocketEvent.MESSAGE;

    client.emitter.emitEvent(event, dummyMessage);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const socket = (client as any).socket as Socket;
    const payload: InputPort<EventPayload> = {
      data: dummyMessage,
      timestamp: dummyTimestamp,
    };
    expect(socket.emit).toHaveBeenCalledWith(event, payload);
  });
});
