import Img, { ImageProps } from 'next/image';

const Image: React.FC<ImageProps> = ({ ...props }) => {
  return <Img {...props} />;
};

export default Image;
