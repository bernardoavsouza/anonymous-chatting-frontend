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
  className,
  ...rest
}) => {
  return (
    <button
      ref={ref}
      data-testid={dataTestId}
      {...rest}
      className={clsx(
        'flex items-center justify-evenly p-2',
        'bg-accent cursor-pointer shadow-lg',
        fullRounded && 'rounded-full',
        className,
      )}>
      {LeftIcon && <LeftIcon role="img" className="text-secondary" size={18} />}
      {children && <Text>{children}</Text>}
      {RightIcon && (
        <RightIcon role="img" className="text-secondary" size={18} />
      )}
    </button>
  );
};
