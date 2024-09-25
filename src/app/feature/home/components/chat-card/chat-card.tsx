import clsx from 'clsx';
import ChatContent from './chat-content/chat-content';
import ChatHeader from './chat-header/chat-header';
import ChatInput from './chat-input/chat-input';

const ChatCard: React.FC = () => {
  return (
    <div
      className={clsx(
        'flex flex-col',
        'h-2/3 w-2/3 p-2',
        'rounded-xl',
        'bg-slate-500',
      )}>
      <ChatHeader />
      <ChatContent className="grow" />
      <ChatInput />
    </div>
  );
};

export default ChatCard;
