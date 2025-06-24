import { Text } from '../../atoms/text';

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  text?: string;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  text,
}) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      <Text>{text}</Text>
    </button>
  );
};
