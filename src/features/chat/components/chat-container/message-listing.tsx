'use client';

import { useEffect, useRef } from 'react';

import { useConversation } from '../../hooks/use-conversation';
import { Balloon } from '@/ui/molecules/balloon';

export const MessageListing: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { messages } = useConversation();

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
