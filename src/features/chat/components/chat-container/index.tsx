import { UserMessageForm } from './user-message-form';
import { MessageListing } from './message-listing';
import { ConversationProvider } from '../../hooks/conversation.context';

export const ChatContainer: React.FC = () => {
  return (
    <div className="flex h-full flex-col gap-y-2 p-2">
      <ConversationProvider>
        <MessageListing />
        <UserMessageForm />
      </ConversationProvider>
    </div>
  );
};
