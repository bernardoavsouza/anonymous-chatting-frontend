import { render, screen } from '@testing-library/react';
import { Balloon } from '..';
import { Message } from '@/features/chat/types/message';

describe('Balloon component style tests', () => {
  it("should align right if it's an incoming message", () => {
    const message: Message = {
      content: 'dummy content',
      direction: 'incoming',
      timestamp: new Date(),
    };

    render(<Balloon message={message} />);

    const element = screen.getByText(/dummy content/i).parentElement;
    expect(element).toHaveClass('self-end');
  });

  it("should align left if it's an outgoing message", () => {
    const message: Message = {
      content: 'dummy content',
      direction: 'outgoing',
      timestamp: new Date(),
    };

    render(<Balloon message={message} />);

    const element = screen.getByText(/dummy content/i).parentElement;
    expect(element).toHaveClass('self-start');
  });
});
