'use client';

import { createContext, useState } from 'react';
import type { Message } from '../../types/message';

export type ConversationContextType = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

export const ConversationContext = createContext<ConversationContextType>({
  messages: [],
  setMessages: () => {},
});

export const ConversationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <ConversationContext.Provider value={{ messages, setMessages }}>
      {children}
    </ConversationContext.Provider>
  );
};
