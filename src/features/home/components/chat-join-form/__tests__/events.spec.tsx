import { mockedNextNavigation } from '@/mocks/navigation';
import { fireEvent, render, screen } from '@testing-library/react';
import { ChatJoinForm } from '..';

jest.mock('next/navigation', () => mockedNextNavigation);

describe('ChatJoinForm event test', () => {
  beforeEach(() => {
    render(<ChatJoinForm />);
  });

  it("should redirect to '/chat' when create new conversation button is clicked", () => {
    const createNewConversationButton = screen.getByTestId(
      'create-new-conversation-button',
    );

    fireEvent.click(createNewConversationButton);

    expect(mockedNextNavigation.useRouter().push).toHaveBeenCalledWith('/chat');
  });
});
