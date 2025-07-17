import { dummyMessage, mockedSocket } from '@/mocks/socket.io-client';
import { SocketClient } from '@/services/socket';
import { SocketEvent } from '@/services/socket/types';
import { renderHook, waitFor } from '@testing-library/react';
import { useConversation } from '..';
import type { ConversationContextType } from '../conversation.context';

jest.mock('socket.io-client', () => mockedSocket);

describe('useConversation hook events tests', () => {
  let context: ConversationContextType;
  let client: SocketClient;

  beforeEach(() => {
    const { result } = renderHook(() => useConversation());
    context = result.current;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (SocketClient as any).instance = null;
    client = SocketClient.getInstance();
  });

  it('should append new message when arrive via event', () => {
    const payload = { ...dummyMessage, direction: 'incoming' };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (client as any).socket.simulateIncomingEvent(SocketEvent.MESSAGE, payload);

    waitFor(() => {
      expect(context.messages).toEqual([payload]);
    });
  });
});
