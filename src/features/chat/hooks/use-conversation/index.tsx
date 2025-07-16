'use client';

import { useContext } from 'react';
import type { ConversationContextType } from './conversation.context';
import { ConversationContext } from './conversation.context';

export const useConversation = (): ConversationContextType => {
  return useContext(ConversationContext);
};
