'use client';

import { SocketClient } from '@/services/socket';
import { SocketEvent } from '@/services/socket/types/events.types';
import type { Message } from '@/services/socket/types/payloads.types';
import { createContext, useEffect, useState } from 'react';

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
      // TODO: remove that casting after fixing payload types
      (payload) => {
        const newMessage: Message = {
          ...(payload as Message),
          direction: 'incoming',
        };
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
