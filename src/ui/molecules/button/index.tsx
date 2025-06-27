import { Text } from '../../atoms/text';
import type { LucideIcon } from 'lucide-react';

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  ref?: React.Ref<HTMLButtonElement>;
  dataTestId?: string;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  dataTestId,
  ref,
}) => {
  return (
    <button
      ref={ref}
      disabled={disabled}
      onClick={onClick}
      data-testid={dataTestId}>
      {LeftIcon && <LeftIcon role="img" />}
      {children && <Text>{children}</Text>}
      {RightIcon && <RightIcon role="img" />}
    </button>
  );
};
