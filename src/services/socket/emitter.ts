import type { Socket } from 'socket.io-client';
import type { InputPort } from './types/base.types';
import type { EventPayload } from './types/events.types';

export class SocketEmitter {
  private socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }
  public emitEvent<T extends keyof EventPayload>(
    event: T,
    payload: EventPayload[T],
  ): void {
    const data: InputPort<EventPayload[T]> = {
      data: payload,
      timestamp: new Date().toISOString(),
    };
    this.socket.emit(event, data);
  }
}
