import type { Message } from '@/features/chat/types/message';
import type { EventPayload, SocketEvent } from '@/services/socket/types';

type SocketMock = {
  on: jest.Mock;
  emit: jest.Mock;
  connect: jest.Mock;
  disconnect: jest.Mock;
  connected: boolean;
};

export class SocketIOClientMock implements SocketMock {
  on = jest.fn();
  emit = jest.fn();
  connect = jest.fn(() => {
    this.connected = true;
  });
  disconnect = jest.fn(() => {
    this.connected = false;
  });
  connected = false;

  // TODO: make this method typesafe
  simulateIncomingEvent(event: SocketEvent, data: EventPayload): void {
    this.on.mock.calls.forEach((call) => {
      if (call[0] === event) {
        call[1](data);
      }
    });
  }
}

export const mockedSocket = {
  connect: jest.fn(() => {
    const socket = new SocketIOClientMock();
    socket.connect();
    return socket;
  }),
};

export const dummyTimestamp = '2025-02-02T06:04:05.000Z';

export const dummyMessage: Message = {
  content: 'dummy message',
  direction: 'outgoing',
  timestamp: dummyTimestamp,
};
