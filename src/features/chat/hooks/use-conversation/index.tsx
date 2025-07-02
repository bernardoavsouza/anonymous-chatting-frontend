'use client';

import { useContext } from 'react';
import { ConversationContext } from './conversation.context';

export const useConversation = () => {
  return useContext(ConversationContext);
};
