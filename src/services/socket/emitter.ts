import type { Socket } from 'socket.io-client';
import type { InputPort } from './types/base.types';
import type { EventPayload, SocketEvent } from './types/events.types';

export class SocketEmitter {
  private socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }
  public emitEvent(event: SocketEvent, payload: EventPayload): void {
    const data: InputPort<EventPayload> = {
      data: payload,
      timestamp: new Date().toISOString(),
    };
    this.socket.emit(event, data);
  }
}
