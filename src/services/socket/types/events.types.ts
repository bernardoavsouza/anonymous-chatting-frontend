import type { JoinConversation, Message } from './payloads.types';

export type EventPayload = Message | JoinConversation;
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
