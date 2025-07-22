import type { Message } from '@/services/socket/types/payloads.types';

export type ConversationContextType = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  conversationId: string | null;
  setConversationId: React.Dispatch<React.SetStateAction<string | null>>;
};
