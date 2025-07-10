// import { mockedSocket } from '@/__mocks__/socket.io-clientt';
import { mockedSocket } from '@/mocks/socket.io-client';
import { SocketClient } from '..';

jest.mock('socket.io-client', () => mockedSocket);

describe('Socket structure tests', () => {
  it('should be a singleton', () => {
    const socket1 = SocketClient.getInstance();
    const socket2 = SocketClient.getInstance();
    expect(socket1).toBe(socket2);
  });

  it('should connect when instantiated', () => {
    const client = SocketClient.getInstance();
    expect(client.isConnected()).toBeTruthy();
  });
});
