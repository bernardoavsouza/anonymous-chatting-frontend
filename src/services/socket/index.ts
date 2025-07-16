import { connect, type Socket } from 'socket.io-client';
import { SocketEmitter } from './emitter';
import { SocketListener } from './listener';

export class SocketClient {
  private static instance?: SocketClient;
  private socket?: Socket;
  public listener: SocketListener;
  public emitter: SocketEmitter;

  private constructor() {
    this.connect();

    if (!this.socket) {
      throw new Error('Socket is not connected');
    }

    this.listener = new SocketListener(this.socket);
    this.emitter = new SocketEmitter(this.socket);
  }

  static getInstance(): SocketClient {
    if (!SocketClient.instance) {
      SocketClient.instance = new SocketClient();
    }
    return SocketClient.instance;
  }

  public isConnected(): boolean {
    return !!this.socket?.connected;
  }

  private connect(): void {
    this.socket = connect(process.env.NEXT_PUBLIC_BACKEND_URL);
  }

  public disconnect(): void {
    this.socket?.disconnect();
  }
}
