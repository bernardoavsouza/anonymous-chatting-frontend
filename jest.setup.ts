import '@testing-library/jest-dom';

afterEach(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
  jest.resetModules();
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // (SocketClient as any).instance = null;
});
