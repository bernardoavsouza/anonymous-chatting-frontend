import { createContext } from 'react';
import type { ConversationContextType } from './types';

export const ConversationContext = createContext<ConversationContextType>({
  messages: [],
  setMessages: () => {
    throw new Error('setMessages was called outside of a provider');
  },
  conversationId: null,
  setConversationId: () => {
    throw new Error('setConversationId was called outside of a provider');
  },
});
