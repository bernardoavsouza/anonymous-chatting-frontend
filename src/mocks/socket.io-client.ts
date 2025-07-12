type SocketMock = {
  on: jest.Mock;
  emit: jest.Mock;
  connect: jest.Mock;
  disconnect: jest.Mock;
  connected: boolean;
};

class SocketIOClientMock implements SocketMock {
  on = jest.fn();
  emit = jest.fn();
  connect = jest.fn(() => {
    this.connected = true;
  });
  disconnect = jest.fn(() => {
    this.connected = false;
  });
  connected = false;
}

export const mockedSocket = {
  connect: jest.fn(() => {
    const socket = new SocketIOClientMock();
    socket.connect();
    return socket;
  }),
};
