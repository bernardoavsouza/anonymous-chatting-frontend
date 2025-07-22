import type { Message } from '@/services/socket/types/payloads.types';
import { Text } from '@/ui/atoms/text';
import clsx from 'clsx';

type BalloonProps = {
  message: Message;
};

export const Balloon: React.FC<BalloonProps> = ({
  message: { content, direction, timestamp },
}) => {
  const time = new Date(timestamp).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      className={clsx(
        'relative',
        'flex w-fit max-w-3/4 gap-x-3 rounded-lg px-4 py-2',
        'bg-primary shadow-lg',
        direction === 'incoming' &&
          'bg-accent text-accent-foreground self-start',
        direction === 'outgoing' &&
          'bg-secondary text-secondary-foreground self-end',
      )}
      data-testid="message-balloon">
      <Text className="flex-1">{content}</Text>
      <Text
        className={clsx(
          'self-end text-xs',
          direction === 'outgoing' && 'text-secondary-foreground-muted',
        )}>
        {time}
      </Text>
    </div>
  );
};
