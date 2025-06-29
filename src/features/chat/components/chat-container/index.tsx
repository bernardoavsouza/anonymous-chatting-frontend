'use client';

import { UserMessageForm } from './user-message-form';
import { MessageListing } from './message-listing';
import { useState } from 'react';
import type { Message } from '../../types/message';

export const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <>
      <MessageListing messages={messages} />
      <UserMessageForm messages={messages} setMessages={setMessages} />
    </>
  );
};
