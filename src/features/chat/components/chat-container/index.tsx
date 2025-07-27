import { MessageListing } from './message-listing';
import { UserMessageForm } from './user-message-form';

export const ChatContainer: React.FC = () => {
  return (
    <div className="flex h-full flex-col gap-y-4 py-3 [&>*]:px-3">
      <MessageListing />
      <UserMessageForm />
    </div>
  );
};
