import { TIcon } from '@/ui/atoms/types/icon.types';
import clsx from 'clsx';
import BasicButton from '../basic-button';

interface PrimaryButtonProps {
  children: React.ReactNode;
  leftIcon?: TIcon;
  rightIcon?: TIcon;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  className,
}) => {
  return (
    <BasicButton
      className={clsx(
        'bg-blue-500 text-white',
        'hover:bg-blue-600',
        'active:bg-blue-700',
        className,
      )}
      {...{ leftIcon, rightIcon }}>
      {children}
    </BasicButton>
  );
};

export default PrimaryButton;
