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

  it('should render an input to type message', () => {
    const element = screen.getByTestId('message-input');
    expect(element).toBeInTheDocument();
  });

  it('should render no messages by default', () => {
    const element = screen.queryByTestId('message-balloon');
    expect(element).not.toBeInTheDocument();
  });
});
