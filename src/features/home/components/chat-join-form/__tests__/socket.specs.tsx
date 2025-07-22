import { mockCrypto } from '@/mocks/crypto';
import { mockDate } from '@/mocks/date';
import { dummyConversationId, dummyTimestamp } from '@/mocks/dummys';
import { mockedNextNavigation } from '@/mocks/navigation';
import { mockedSocket } from '@/mocks/socket.io-client';
import { SocketClient } from '@/services/socket';
import { SocketEvent } from '@/services/socket/types/events.types';
import { fireEvent, render, screen } from '@testing-library/react';
import { ChatJoinForm } from '..';

jest.mock('socket.io-client', () => mockedSocket);
jest.mock('next/navigation', () => mockedNextNavigation);

describe('ChatJoinForm socket test', () => {
  beforeEach(() => {
    mockDate();
    mockCrypto();
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
