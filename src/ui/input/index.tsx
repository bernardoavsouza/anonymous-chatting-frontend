import { Ref } from 'react';

type InputProps = {
  ref?: Ref<HTMLInputElement>;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export const Input: React.FC<InputProps> = ({ ref, ...props }) => {
  return <input ref={ref} {...props} />;
};
