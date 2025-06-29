import type { Message } from '../../types/message';
import { Balloon } from '@/ui/molecules/balloon';

type MessageListingProps = {
  messages: Message[];
};

export const MessageListing: React.FC<MessageListingProps> = ({ messages }) => {
  return (
    <>
      {messages.map((message, index) => (
        <Balloon key={index} message={message} />
      ))}
    </>
  );
};
