'use client';

import { SocketClient } from '@/services/socket';
import { SocketEvent } from '@/services/socket/types';
import { Input } from '@/ui/atoms/input';
import { Button } from '@/ui/molecules/button';
import { SendHorizonal } from 'lucide-react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { useConversation } from '../../hooks/use-conversation';
import type { Message } from '../../types/message';

export const UserMessageForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { messages, setMessages } = useConversation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!inputValue) return;

    const newMessage: Message = {
      content: inputValue,
      direction: 'outgoing',
      timestamp: new Date().toISOString(),
    };
    SocketClient.getInstance().emitter.emitEvent(
      SocketEvent.MESSAGE,
      newMessage,
    );
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
        className="size-[37px]"
      />
    </form>
  );
};
