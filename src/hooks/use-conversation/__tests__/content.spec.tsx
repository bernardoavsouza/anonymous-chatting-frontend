import { resetSocket } from '@/services/socket/utils';
import { act, renderHook } from '@testing-library/react';
import { useConversation } from '..';
import {
  dummyConversationId,
  dummyMessage,
} from '../../../../__mocks__/dummys';
import type { HookResult } from '../../types';
import { ConversationProvider } from '../conversation.provider';
import type { ConversationContextType } from '../types';

describe('useConversation hook content tests', () => {
  let result: HookResult<ConversationContextType>;

  beforeEach(() => {
    resetSocket();

    ({ result } = renderHook(() => useConversation(), {
      wrapper: ConversationProvider,
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

  it('should have null conversation id by default', () => {
    expect(result.current.conversationId).toBeNull();
  });

  it('should be able to update conversation id', () => {
    act(() => {
      result.current.setConversationId(dummyConversationId);
    });

    expect(result.current.conversationId).toEqual(dummyConversationId);
  });
});
