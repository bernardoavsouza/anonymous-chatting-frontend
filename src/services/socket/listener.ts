import type { Socket } from 'socket.io-client';
import type { CallbacksReference, EventCallback, EventPayload } from './types';
import { SocketEvent } from './types';

export class SocketListener {
  private socket: Socket;
  private eventCallbacks: CallbacksReference =
    SocketListener.buildCallbacksReference();

  static buildCallbacksReference(): CallbacksReference {
    return Object.fromEntries(
      Object.values(SocketEvent).map<[SocketEvent, EventCallback[]]>(
        (event) => [event, []],
      ),
    ) as CallbacksReference;
  }

  constructor(socket: Socket) {
    this.socket = socket;
    this.listenToEvents();
  }

  private listenToEvents(): void {
    Object.values(SocketEvent).forEach((event) => {
      this.socket?.on(event, (payload: EventPayload) => {
        this.eventCallbacks[event].forEach((callback) => callback(payload));
      });
    });
  }

  public onEvent(event: SocketEvent, callback: EventCallback): () => void {
    this.eventCallbacks[event].push(callback);

    return () => {
      this.eventCallbacks[event] = this.eventCallbacks[event].filter(
        (cb) => cb !== callback,
      );
    };
  }
}
