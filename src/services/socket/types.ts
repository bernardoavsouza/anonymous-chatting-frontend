type Message = string;
export type EventPayload = Message;
export type EventCallback = (payload: EventPayload) => void;

export enum SocketEvent {
  Message = 'conversation:message',
}
