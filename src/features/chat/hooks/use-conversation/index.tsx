'use client';

import { SocketClient } from '@/services/socket';
import { SocketEvent } from '@/services/socket/types';
import { useContext, useEffect } from 'react';
import type { Message } from '../../types/message';
import type { ConversationContextType } from './conversation.context';
import { ConversationContext } from './conversation.context';

export const useConversation = (): ConversationContextType => {
  const { messages, setMessages } = useContext(ConversationContext);
  const client = SocketClient.getInstance();

  useEffect(() => {
    if (client.isConnected()) return;

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

  return {
    messages,
    setMessages,
  };
};
