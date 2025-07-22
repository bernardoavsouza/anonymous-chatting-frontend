'use client';

import { useContext } from 'react';
import { ConversationContext } from './conversation.context';
import type { ConversationContextType } from './types';

export const useConversation = (): ConversationContextType => {
  return useContext(ConversationContext);
};
