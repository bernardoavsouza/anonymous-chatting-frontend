export type JoinConversation = {
  conversationId: string;
};

export type Message = {
  content: string;
  direction: 'incoming' | 'outgoing';
  timestamp: string;
};
