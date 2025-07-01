import clsx from 'clsx';
import { Text } from '../../atoms/text';
import type { LucideIcon } from 'lucide-react';

type ButtonProps = {
  children?: React.ReactNode;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  fullRounded?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  dataTestId?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  dataTestId,
  fullRounded = false,
  ref,
  ...rest
}) => {
  return (
    <button
      ref={ref}
      data-testid={dataTestId}
      {...rest}
      className={clsx(
        'flex items-center p-2',
        'bg-accent',
        fullRounded && 'rounded-full',
      )}>
      {LeftIcon && <LeftIcon role="img" className="text-secondary" size={14} />}
      {children && <Text>{children}</Text>}
      {RightIcon && (
        <RightIcon role="img" className="text-secondary" size={14} />
      )}
    </button>
  );
};
