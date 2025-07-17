import type { Socket } from 'socket.io-client';
import type { EventPayload, InputPort, SocketEvent } from './types';

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
