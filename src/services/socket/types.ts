type Message = string;
export type EventPayload = Message;
export type EventCallback = (payload: EventPayload) => void;
export type CallbacksReference = Record<SocketEvent, EventCallback[]>;

export enum SocketEvent {
  MESSAGE = 'conversation:message',
  JOIN = 'conversation:join',
  LEAVE = 'conversation:leave',
}
