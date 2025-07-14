// import { mockedSocket } from '@/__mocks__/socket.io-clientt';
import { mockedSocket } from '@/mocks/socket.io-client';
import { SocketClient } from '..';

jest.mock('socket.io-client', () => mockedSocket);

describe('Socket connection tests', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (SocketClient as any).instance = null;
  });

  it('should be a singleton', () => {
    const socket1 = SocketClient.getInstance();
    const socket2 = SocketClient.getInstance();
    expect(socket1).toBe(socket2);
  });

  it('should connect when instantiated', () => {
    const client = SocketClient.getInstance();
    expect(client.isConnected()).toBeTruthy();
  });

  it('should disconnect client when disconnect method is called', () => {
    const client = SocketClient.getInstance();
    client.disconnect();
    expect(client.isConnected()).toBeFalsy();
  });
});
