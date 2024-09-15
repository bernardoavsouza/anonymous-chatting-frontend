import { TIcon } from '@/ui/atoms/types/icon.types';
import clsx from 'clsx';
import BasicButton from '../basic-button';

interface SecondaryButtonProps {
  children: React.ReactNode;
  leftIcon?: TIcon;
  rightIcon?: TIcon;
  className?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  className,
}) => {
  return (
    <BasicButton
      className={clsx(
        'bg-red-500 text-white',
        'hover:bg-red-600',
        'active:bg-red-700',
        className,
      )}
      {...{ leftIcon, rightIcon }}>
      {children}
    </BasicButton>
  );
};

export default SecondaryButton;
