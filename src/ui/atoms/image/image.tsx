import clsx from 'clsx';
import Img, { ImageProps as ImgProps } from 'next/image';

type ImageProps = ImgProps & {
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean | 'full';
  className?: string;
};

const Image: React.FC<ImageProps> = ({
  size = 'md',
  rounded,
  className,
  ...props
}) => {
  const isFullRounded = rounded === 'full';
  const isSm = size === 'sm';
  const isMd = size === 'md';
  const isLg = size === 'lg';

  const finalSize = ((isSm && 32) || (isMd && 64) || (isLg && 256)) as number;

  return (
    <Img
      {...props}
      width={finalSize}
      height={finalSize}
      className={clsx(isFullRounded && 'rounded-full', className)}
    />
  );
};

export default Image;
