interface ChatContentProps {
  className?: string;
}

const ChatContent: React.FC<ChatContentProps> = ({ className }) => {
  return <div className={className}>this is chat content</div>;
};

export default ChatContent;
