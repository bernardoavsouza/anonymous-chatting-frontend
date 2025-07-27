import type {
  JoinConversation,
  LeaveConversation,
  Message,
} from './payloads.types';

export type EventPayload = {
  [SocketEvent.MESSAGE]: Message;
  [SocketEvent.JOIN]: JoinConversation;
  [SocketEvent.LEAVE]: LeaveConversation;
};

export type EventCallback<T extends keyof EventPayload> = (
  payload: EventPayload[T],
) => void;

export type CallbacksReference<T extends keyof EventPayload = SocketEvent> =
  Record<T, EventCallback<T>[]>;

export enum SocketEvent {
  MESSAGE = 'conversation:message',
  JOIN = 'conversation:join',
  LEAVE = 'conversation:leave',
}
