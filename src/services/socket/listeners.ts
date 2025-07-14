import type { Socket } from 'socket.io-client';
import type { EventPayload } from './types';
import { SocketEvent, type EventCallback } from './types';

export class SocketListeners {
  private socket: Socket;
  public eventCallbacks: Record<SocketEvent, EventCallback[]> = {
    [SocketEvent.Message]: [],
  };

  constructor(socket: Socket) {
    this.socket = socket;
    this.listenToEvents();
  }

  private listenToEvents() {
    Object.values(SocketEvent).forEach((event) => {
      this.socket?.on(event, (payload: EventPayload) => {
        this.eventCallbacks[event].forEach((callback) => callback(payload));
      });
    });
  }

  public onEvent(event: SocketEvent, callback: EventCallback) {
    this.eventCallbacks[event].push(callback);
  }
}
