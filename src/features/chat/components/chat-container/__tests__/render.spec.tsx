import { render, screen } from '@testing-library/react';
import { ChatContainer } from '..';

describe('ChatContainer component render tests', () => {
  beforeEach(() => {
    render(<ChatContainer />);
  });

  it('should render a button to send message', () => {
    const element = screen.getByTestId('send-message-button');
    expect(element).toBeInTheDocument();
  });
});
