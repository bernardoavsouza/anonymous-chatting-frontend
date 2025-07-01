import clsx from 'clsx';
import type { Ref } from 'react';

type InputProps = {
  ref?: Ref<HTMLInputElement>;
  dataTestId?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ ref, dataTestId, ...props }) => {
  return (
    <input
      ref={ref}
      {...props}
      data-testid={dataTestId}
      className={clsx(
        'rounded-2xl px-4 py-1',
        'bg-secondary outline-0',
        'placeholder:text-secondary-foreground-muted placeholder:text-xs',
      )}
    />
  );
};
