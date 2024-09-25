import clsx from 'clsx';
import * as HeroIcons from '@heroicons/react/24/outline';
import { TIcon, TIconSize } from '../types/icon.types';

interface IconProps {
  name: TIcon;
  className?: string;
  size?: TIconSize;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  className,
  size = 'base',
  onClick,
}) => {
  const isBase = size === 'base';
  const isMd = size === 'md';

  const finalClassName = clsx(isBase && 'size-4', isMd && 'size-6', className);
  const HeroIcon = HeroIcons[name];

  return <HeroIcon className={finalClassName} onClick={onClick} />;
};

export default Icon;
