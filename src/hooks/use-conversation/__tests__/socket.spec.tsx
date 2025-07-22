import { dummyMessage } from '@/mocks/dummys';
import { mockedSocket } from '@/mocks/socket.io-client';
import { SocketClient } from '@/services/socket';
import { SocketEvent } from '@/services/socket/types/events.types';
import { resetSocket } from '@/services/socket/utils';
import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { useConversation } from '..';
import type { HookResult } from '../../types';
import {
  ConversationProvider,
  type ConversationContextType,
} from '../conversation.context';

jest.mock('socket.io-client', () => mockedSocket);

describe('useConversation hook events tests', () => {
  let result: HookResult<ConversationContextType>;

  beforeEach(() => {
    resetSocket();

    ({ result } = renderHook(() => useConversation(), {
      wrapper: ({ children }) => (
        <ConversationProvider>{children}</ConversationProvider>
      ),
    }));
  });

  it('should append new message when arrive via event', () => {
    const payload = { ...dummyMessage, direction: 'incoming' };

    act(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (SocketClient.getInstance() as any).socket.simulateIncomingEvent(
        SocketEvent.MESSAGE,
        payload,
      );
    });

    expect(result.current.messages).toEqual([payload]);
  });
});
