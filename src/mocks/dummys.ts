import type { Message } from '@/services/socket/types/payloads.types';

export const dummyUUID = 'e21d29c7-7c96-4cba-8121-1f7e2fa101e1';
export const dummyTimestamp = '2025-02-02T06:04:05.000Z';

export const dummyConversationId = dummyUUID;
export const dummyMessage: Message = {
  content: 'dummy message',
  direction: 'outgoing',
  timestamp: dummyTimestamp,
};
