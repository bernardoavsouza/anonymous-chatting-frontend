export const mockedNextNavigation = {
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
};
