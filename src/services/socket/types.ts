import type { Message } from '@/features/chat/types/message';

export type EventPayload = Message;
export type EventCallback<T extends EventPayload> = (payload: T) => void;
export type CallbacksReference = Record<
  SocketEvent,
  EventCallback<EventPayload>[]
>;

export enum SocketEvent {
  MESSAGE = 'conversation:message',
  JOIN = 'conversation:join',
  LEAVE = 'conversation:leave',
}

export type InputPort<T> = {
  data: T;
  timestamp: string;
};
