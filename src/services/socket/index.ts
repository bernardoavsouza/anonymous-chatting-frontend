import { connect, type Socket } from 'socket.io-client';

export class SocketClient {
  private static instance?: SocketClient;
  private socket?: Socket;

  private constructor() {
    this.connect();
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
    this.socket = connect('http://localhost:3000');
  }
}
