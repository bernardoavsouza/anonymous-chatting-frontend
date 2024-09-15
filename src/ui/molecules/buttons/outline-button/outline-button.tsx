import { TIcon } from '@/ui/atoms/types/icon.types';
import clsx from 'clsx';
import BasicButton from '../basic-button';

interface OutlineButtonProps {
  children: React.ReactNode;
  leftIcon?: TIcon;
  rightIcon?: TIcon;
  className?: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  className,
}) => {
  return (
    <BasicButton
      className={clsx(
        'border border-blue-500',
        'text-blue-500',
        'hover:border-blue-600 hover:text-blue-600',
        'active:border-blue-700 active:text-blue-700',
        className,
      )}
      {...{ leftIcon, rightIcon }}>
      {children}
    </BasicButton>
  );
};

export default OutlineButton;
