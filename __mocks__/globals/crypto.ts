import { dummyUUID } from '../dummys';

export const mockCrypto = (): void => {
  jest.spyOn(global.crypto, 'randomUUID').mockImplementation(() => dummyUUID);
};
