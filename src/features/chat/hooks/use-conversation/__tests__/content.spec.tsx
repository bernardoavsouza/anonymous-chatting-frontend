import { renderHook, waitFor } from '@testing-library/react';
import { useConversation } from '..';
import type { Message } from '@/features/chat/types/message';

describe('useConversation hook content tests', () => {
  it('should have empty messages by default', () => {
    const { result } = renderHook(() => useConversation());
    expect(result.current.messages).toEqual([]);
  });

  it('should update messages', () => {
    const { result } = renderHook(() => useConversation());
    const newMessage: Message = {
      content: 'dummy content',
      direction: 'incoming',
      timestamp: new Date(2025, 1, 2, 3, 4, 5),
    };

    result.current.setMessages([newMessage]);
    waitFor(() => {
      expect(result.current.messages).toEqual([newMessage]);
    });
  });
});
