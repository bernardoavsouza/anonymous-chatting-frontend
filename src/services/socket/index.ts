import { connect, type Socket } from 'socket.io-client';
import { SocketListeners } from './listeners';

export class SocketClient {
  private static instance?: SocketClient;
  private socket?: Socket;
  public listener: SocketListeners;

  private constructor() {
    this.connect();

    if (!this.socket) {
      throw new Error('Socket is not connected');
    }

    this.listener = new SocketListeners(this.socket);
  }

  static getInstance() {
    if (!SocketClient.instance) {
      SocketClient.instance = new SocketClient();
    }
    return SocketClient.instance;
  }

  public isConnected() {
    return !!this.socket?.connected;
  }

  private connect() {
    this.socket = connect(process.env.NEXT_PUBLIC_BACKEND_URL);
  }

  public disconnect() {
    this.socket?.disconnect();
  }
}
