import { Icon, TextInput } from '@/ui/atoms';
import clsx from 'clsx';

const ChatInput: React.FC = () => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-y-2',
        'rounded-md p-2',
        'bg-slate-400',
      )}>
      <TextInput />
      <div className="grid grid-cols-[auto_1fr_auto] gap-x-2">
        <Icon name="FaceSmileIcon" />
        <Icon name="PaperClipIcon" />
        <Icon name="PaperAirplaneIcon" />
      </div>
    </div>
  );
};

export default ChatInput;
