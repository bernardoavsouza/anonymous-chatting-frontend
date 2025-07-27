import type { Message } from '@/services/socket/types/payloads.types';
import { render, screen } from '@testing-library/react';
import { dummyTimestamp } from '~/dummys';
import { Balloon } from '..';

describe('Balloon component style tests', () => {
  it("should align left if it's an incoming message", () => {
    const message: Message = {
      content: 'dummy content',
      direction: 'incoming',
      timestamp: dummyTimestamp,
    };

    render(<Balloon message={message} />);

    const element = screen.getByText(/dummy content/i).parentElement;
    expect(element).toHaveClass('self-start');
  });

  it("should align right if it's an outgoing message", () => {
    const message: Message = {
      content: 'dummy content',
      direction: 'outgoing',
      timestamp: dummyTimestamp,
    };

    render(<Balloon message={message} />);

    const element = screen.getByText(/dummy content/i).parentElement;
    expect(element).toHaveClass('self-end');
  });
});
