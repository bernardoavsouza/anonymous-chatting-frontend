'use client';

import { SocketClient } from '@/services/socket';
import { SocketEvent } from '@/services/socket/types';
import { createContext, useEffect, useState } from 'react';
import type { Message } from '../../types/message';

export type ConversationContextType = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

export const ConversationContext = createContext<ConversationContextType>({
  messages: [],
  setMessages: () => {
    throw new Error('setMessages was called outside of a provider');
  },
});

export const ConversationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const client = SocketClient.getInstance();

  useEffect(() => {
    const unsubscribe = client.listener.onEvent(
      SocketEvent.MESSAGE,
      (payload) => {
        const newMessage: Message = { ...payload, direction: 'incoming' };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      },
    );

    return (): void => {
      unsubscribe();
    };
  }, [client, setMessages]);

  return (
    <ConversationContext.Provider value={{ messages, setMessages }}>
      {children}
    </ConversationContext.Provider>
  );
};
