'use client';

import { useConversation } from '../../hooks/use-conversation';
import { Balloon } from '@/ui/molecules/balloon';

export const MessageListing: React.FC = () => {
  const { messages } = useConversation();

  return (
    <div className="flex flex-col gap-y-3">
      {messages.map((message, index) => (
        <Balloon key={index} message={message} />
      ))}
    </div>
  );
};
