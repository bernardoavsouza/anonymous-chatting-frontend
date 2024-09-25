import { Text, Image } from '@/ui/atoms';

const ChatHeader: React.FC = () => {
  const friendData = {
    name: 'John Doe',
    imageLink: 'https://pudim.com',
  };

  return (
    <div>
      <Image src="https://i.pravatar.cc/300" alt="teste" size="sm" />
      <Text as="h6">{friendData.name}</Text>
    </div>
  );
};

export default ChatHeader;
