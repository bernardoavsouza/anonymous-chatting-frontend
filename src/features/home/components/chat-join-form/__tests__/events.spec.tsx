import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { mockCrypto } from '~/globals/crypto';
import { ChatJoinForm } from '..';

describe('ChatJoinForm event test', () => {
  beforeAll(() => {
    mockCrypto();
  });

  beforeEach(() => {
    render(<ChatJoinForm />);
  });

  it("should redirect to '/chat' when create new conversation button is clicked", () => {
    const createNewConversationButton = screen.getByTestId(
      'create-new-conversation-button',
    );

    fireEvent.click(createNewConversationButton);

    expect(useRouter().push).toHaveBeenCalledWith('/chat');
  });
});
