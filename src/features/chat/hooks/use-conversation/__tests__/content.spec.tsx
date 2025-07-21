import { dummyMessage, mockedSocket } from '@/mocks/socket.io-client';
import { resetSocket } from '@/services/socket/utils';
import { act, renderHook } from '@testing-library/react';
import { useConversation } from '..';
import type { HookResult } from '../../types';
import type { ConversationContextType } from '../conversation.context';
import { ConversationProvider } from '../conversation.context';

jest.mock('socket.io-client', () => mockedSocket);

describe('useConversation hook content tests', () => {
  let result: HookResult<ConversationContextType>;

  beforeEach(() => {
    resetSocket();

    ({ result } = renderHook(() => useConversation(), {
      wrapper: ({ children }) => (
        <ConversationProvider>{children}</ConversationProvider>
      ),
    }));
  });

  it('should have empty messages by default', () => {
    expect(result.current.messages).toEqual([]);
  });

  it('should update messages', async () => {
    act(() => {
      result.current.setMessages([dummyMessage]);
    });

    expect(result.current.messages).toEqual([dummyMessage]);
  });
});
