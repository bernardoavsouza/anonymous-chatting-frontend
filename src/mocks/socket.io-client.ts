type SocketMock = {
  on: jest.Mock;
  emit: jest.Mock;
  connect: jest.Mock;
  disconnect: jest.Mock;
  connected: boolean;
};

const socketIOClientMock: SocketMock = {
  on: jest.fn(),
  emit: jest.fn(),
  connect: jest.fn(),
  disconnect: jest.fn(),
  connected: true,
};

export const mockedSocket = {
  connect: jest.fn(() => socketIOClientMock),
};
