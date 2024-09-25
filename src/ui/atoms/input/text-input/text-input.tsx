import clsx from 'clsx';
import BasicInput from '../basic-input';

interface TextInputProps {
  placeholder?: string;
  label?: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  label,
  className,
}) => {
  return (
    <div className={clsx('flex flex-col justify-center', className)}>
      <BasicInput
        type="text"
        placeholder={placeholder}
        label={label}
        inputClassName={clsx(
          'px-1',
          'rounded',
          'text-slate-900 bg-transparent',
          'outline-none',
        )}
      />
    </div>
  );
};

export default TextInput;
