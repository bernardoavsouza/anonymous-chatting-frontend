import { dummyTimestamp } from './dummys';

export const mockDate = (): void => {
  const OriginalDate = global.Date;

  jest.spyOn(global, 'Date').mockImplementation((...args) => {
    if (args.length > 0) {
      return new OriginalDate(...args);
    }
    return new OriginalDate(dummyTimestamp);
  });
};
