import { Text } from '../../atoms/text';
import type { LucideIcon } from 'lucide-react';

type ButtonProps = {
  children?: React.ReactNode;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  ref?: React.Ref<HTMLButtonElement>;
  dataTestId?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  dataTestId,
  ref,
  ...rest
}) => {
  return (
    <button ref={ref} data-testid={dataTestId} {...rest}>
      {LeftIcon && <LeftIcon role="img" />}
      {children && <Text>{children}</Text>}
      {RightIcon && <RightIcon role="img" />}
    </button>
  );
};
