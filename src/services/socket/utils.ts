import { SocketClient } from '.';

export const resetSocket = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (SocketClient as any).instance = null;
  SocketClient.getInstance();
};
