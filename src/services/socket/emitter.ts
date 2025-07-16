import type { Socket } from 'socket.io-client';

export class SocketEmitter {
  private socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }
  public emitEvent(event: string, payload: unknown) {
    this.socket.emit(event, payload);
  }
}
