import { HTMLInputTypeAttribute } from 'react';
import ShouldRender from '../should-render/should-render';

interface BasicInputProps {
  type: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const BasicInput: React.FC<BasicInputProps> = ({
  type,
  label,
  placeholder,
  labelClassName,
  inputClassName,
}) => {
  return (
    <>
      <ShouldRender if={!!label}>
        <label htmlFor={label} className={labelClassName}>
          {label}
        </label>
      </ShouldRender>

      <input
        id={label}
        type={type}
        placeholder={placeholder}
        className={inputClassName}
      />
    </>
  );
};

export default BasicInput;
