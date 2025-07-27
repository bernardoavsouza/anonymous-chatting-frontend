import { SocketClient } from '@/services/socket';
import { SocketEvent } from '@/services/socket/types/events.types';
import { resetSocket } from '@/services/socket/utils';
import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { dummyMessage } from '~/dummys';
import { useConversation } from '..';
import type { HookResult } from '../../types';
import { ConversationProvider } from '../conversation.provider';
import type { ConversationContextType } from '../types';

describe('useConversation hook events tests', () => {
  let result: HookResult<ConversationContextType>;

  beforeEach(() => {
    resetSocket();

    ({ result } = renderHook(() => useConversation(), {
      wrapper: ConversationProvider,
    }));
  });

  it('should append new message when arrive via event', () => {
    const payload = { ...dummyMessage, direction: 'incoming' };

    act(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (SocketClient.getInstance() as any).socket.simulateIncomingEvent(
        SocketEvent.MESSAGE,
        payload,
      );
    });

    expect(result.current.messages).toEqual([payload]);
  });
});
