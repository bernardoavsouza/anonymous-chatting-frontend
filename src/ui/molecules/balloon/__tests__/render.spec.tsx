import { dummyMessage } from '@/mocks/dummys';
import { render, screen } from '@testing-library/react';
import { Balloon } from '..';

describe('Balloon component render tests', () => {
  beforeEach(() => {
    render(<Balloon message={dummyMessage} />);
  });

  it('should render the content', () => {
    const element = screen.getByText(dummyMessage.content);
    expect(element).toBeInTheDocument();
  });

  it('should render timestamp', () => {
    const element = screen.getByText('03:04');
    expect(element).toBeInTheDocument();
  });
});
