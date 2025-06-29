import { render, screen } from '@testing-library/react';
import { Balloon } from '..';
import type { Message } from '@/features/chat/types/message';

describe('Balloon component render tests', () => {
  const message: Message = {
    content: 'dummy content',
    direction: 'incoming',
    timestamp: new Date(2025, 1, 2, 3, 4, 5),
  };

  beforeEach(() => {
    render(<Balloon message={message} />);
  });

  it('should render the content', () => {
    const element = screen.getByText(/dummy content/i);
    expect(element).toBeInTheDocument();
  });

  it('should render timestamp', () => {
    const element = screen.getByText('03:04');
    expect(element).toBeInTheDocument();
  });
});
