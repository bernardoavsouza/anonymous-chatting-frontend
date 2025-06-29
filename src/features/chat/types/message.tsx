export type Message = {
  content: string;
  direction: 'incoming' | 'outgoing';
  timestamp: Date;
};
