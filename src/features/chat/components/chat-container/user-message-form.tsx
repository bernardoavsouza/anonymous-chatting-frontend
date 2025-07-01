'use client';

import { Input } from '@/ui/atoms/input';
import { Button } from '@/ui/molecules/button';
import type { FormEvent } from 'react';
import { useState } from 'react';
import type { Message } from '../../types/message';
import { useConversation } from '../../hooks/use-conversation';
import { SendHorizonal } from 'lucide-react';

export const UserMessageForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { messages, setMessages } = useConversation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage: Message = {
      content: inputValue,
      direction: 'outgoing',
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-x-2">
      <Input
        dataTestId="message-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Message"
        className="flex-1"
      />
      <Button
        type="submit"
        leftIcon={SendHorizonal}
        dataTestId="send-message-button"
        fullRounded
      />
    </form>
  );
};
