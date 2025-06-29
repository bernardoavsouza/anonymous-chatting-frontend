'use client';
import { Input } from '@/ui/atoms/input';
import { Balloon } from '@/ui/molecules/balloon';
import { Button } from '@/ui/molecules/button';
import { FormEvent, useState } from 'react';
import { Message } from '../../types/message';

export const ChatContainer: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage: Message = {
      content: inputValue,
      direction: 'incoming',
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {messages.map((message, index) => (
        <Balloon key={index} message={message} />
      ))}
      <Input
        dataTestId="message-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button type="submit" dataTestId="send-message-button" />
    </form>
  );
};
