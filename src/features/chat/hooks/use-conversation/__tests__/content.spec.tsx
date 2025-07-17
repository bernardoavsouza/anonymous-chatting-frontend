import { dummyMessage } from '@/mocks/socket.io-client';
import { renderHook, waitFor } from '@testing-library/react';
import { useConversation } from '..';
import type { ConversationContextType } from '../conversation.context';

describe('useConversation hook content tests', () => {
  let context: ConversationContextType;

  beforeEach(() => {
    const { result } = renderHook(() => useConversation());
    context = result.current;
  });

  it('should have empty messages by default', () => {
    expect(context.messages).toEqual([]);
  });

  it('should update messages', () => {
    context.setMessages([dummyMessage]);
    waitFor(() => {
      expect(context.messages).toEqual([dummyMessage]);
    });
  });
});
