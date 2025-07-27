import { SocketClient } from '@/services/socket';
import { SocketEvent } from '@/services/socket/types/events.types';
import { fireEvent, render, screen } from '@testing-library/react';
import { dummyConversationId, dummyTimestamp } from '~/dummys';
import { mockCrypto } from '~/globals/crypto';
import { mockDate } from '~/globals/date';
import { ChatJoinForm } from '..';

describe('ChatJoinForm socket test', () => {
  beforeAll(() => {
    mockDate();
    mockCrypto();
  });

  beforeEach(() => {
    render(<ChatJoinForm />);
  });

  it('should emit join event when create new conversation button is clicked', () => {
    const createNewConversationButton = screen.getByTestId(
      'create-new-conversation-button',
    );

    fireEvent.click(createNewConversationButton);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const socket = (SocketClient.getInstance() as any).socket;

    expect(socket.emit).toHaveBeenCalledWith(SocketEvent.JOIN, {
      data: {
        conversationId: dummyConversationId,
      },
      timestamp: dummyTimestamp,
    });
  });
});
