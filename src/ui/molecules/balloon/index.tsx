import { Message } from '@/features/chat/types/message';
import { Text } from '@/ui/atoms/text';

type BalloonProps = {
  message: Message;
};

export const Balloon: React.FC<BalloonProps> = ({
  message: { content, direction, timestamp },
}) => {
  const time = timestamp.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={direction === 'incoming' ? 'self-end' : 'self-start'}>
      <Text>{content}</Text>
      <Text>{time}</Text>
    </div>
  );
};
