'use client';

import { useEffect, useRef, useState } from 'react';

import { SocketClient } from '@/services/socket';
import { SocketEvent } from '@/services/socket/types';
import { Balloon } from '@/ui/molecules/balloon';
import { useConversation } from '../../hooks/use-conversation';
import type { Message } from '../../types/message';

export const MessageListing: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { messages, setMessages } = useConversation();
  const [newMessage, setNewMessage] = useState<Message | null>();

  useEffect(() => {
    const unsubscribe = SocketClient.getInstance().listener.onEvent(
      SocketEvent.MESSAGE,
      (payload) => {
        setNewMessage({ ...payload, direction: 'incoming' });
      },
    );

    if (newMessage) {
      setNewMessage(null);
      setMessages([...messages, newMessage]);
    }

    return (): void => {
      unsubscribe();
    };
  }, [messages, newMessage, setMessages]);

  useEffect(() => {
    if (!ref.current?.scrollTo) return;

    ref.current.scrollTo({
      top: ref.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div ref={ref} className="flex flex-1 flex-col gap-y-3 overflow-y-auto">
      {messages.map((message, index) => (
        <Balloon key={index} message={message} />
      ))}
    </div>
  );
};
