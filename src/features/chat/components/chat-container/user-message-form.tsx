import { Input } from '@/ui/atoms/input';
import { Button } from '@/ui/molecules/button';
import type { FormEvent } from 'react';
import { useState } from 'react';
import type { Message } from '../../types/message';

type UserMessageFormProps = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

export const UserMessageForm: React.FC<UserMessageFormProps> = ({
  messages,
  setMessages,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

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
      <Input
        dataTestId="message-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button type="submit" dataTestId="send-message-button" />
    </form>
  );
};
