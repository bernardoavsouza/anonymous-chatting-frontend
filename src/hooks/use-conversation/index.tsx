'use client';

import { useContext } from 'react';
import type { ConversationContextType } from './conversation.context';
import { ConversationContext } from './conversation.context';

export const useConversation = (): ConversationContextType => {
  const { messages, setMessages } = useContext(ConversationContext);

  return {
    messages,
    setMessages,
  };
};
