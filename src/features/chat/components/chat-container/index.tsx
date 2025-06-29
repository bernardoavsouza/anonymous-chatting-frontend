import { UserMessageForm } from './user-message-form';
import { MessageListing } from './message-listing';
import { ConversationProvider } from '../../hooks/conversation.context';

export const ChatContainer: React.FC = () => {
  return (
    <ConversationProvider>
      <MessageListing />
      <UserMessageForm />
    </ConversationProvider>
  );
};
