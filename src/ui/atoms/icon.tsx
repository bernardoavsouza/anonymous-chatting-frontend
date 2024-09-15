import clsx from 'clsx';
import * as HeroIcons from '@heroicons/react/24/outline';
import { TIcon, TIconSize } from './types/icon.types';

interface IconProps {
  name: TIcon;
  className?: string;
  size?: TIconSize;
}

const Icon: React.FC<IconProps> = ({ name, className, size = 'base' }) => {
  const isBase = size === 'base';
  const isMd = size === 'md';

  const finalClassName = clsx(
    isBase && 'h-4 w-4',
    isMd && 'h-6 w-6',
    className,
  );
  const HeroIcon = HeroIcons[name];

  return <HeroIcon className={finalClassName} />;
};

export default Icon;
