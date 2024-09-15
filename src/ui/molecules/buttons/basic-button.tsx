import clsx from 'clsx';
import { Icon, Text } from '@/ui/atoms';
import { TIcon } from '@/ui/atoms/types/icon.types';

interface BasicButtonProps {
  children: React.ReactNode;
  className?: string;
  leftIcon?: TIcon;
  rightIcon?: TIcon;
}

const BasicButton: React.FC<BasicButtonProps> = ({
  children,
  className,
  leftIcon,
  rightIcon,
}) => {
  const finalClassName = clsx(
    'flex items-center justify-center gap-2',
    'px-3 py-1 rounded-md',
    'transition-colors duration-200',
    className,
  );
  return (
    <button type="button" className={finalClassName}>
      {leftIcon && <Icon name={leftIcon} />}

      <Text as="span">{children}</Text>

      {rightIcon && <Icon name={rightIcon} />}
    </button>
  );
};

export default BasicButton;
