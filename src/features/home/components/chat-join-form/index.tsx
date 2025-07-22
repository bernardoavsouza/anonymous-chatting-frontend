'use client';

import { SocketClient } from '@/services/socket';
import { SocketEvent } from '@/services/socket/types/events.types';
import { Button } from '@/ui/molecules/button';
import { useRouter } from 'next/navigation';

export const ChatJoinForm: React.FC = () => {
  const router = useRouter();

  const handleNewConversation = (): void => {
    SocketClient.getInstance().emitter.emitEvent(SocketEvent.JOIN, {
      conversationId: crypto.randomUUID(),
    });
    router.push('/chat');
  };

  return (
    <>
      <Button
        onClick={handleNewConversation}
        dataTestId="create-new-conversation-button">
        Create new conversation
      </Button>
    </>
  );
};
