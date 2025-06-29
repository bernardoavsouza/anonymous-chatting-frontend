import type { Ref } from 'react';

type InputProps = {
  ref?: Ref<HTMLInputElement>;
  dataTestId?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ ref, dataTestId, ...props }) => {
  return <input ref={ref} {...props} data-testid={dataTestId} />;
};
