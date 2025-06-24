type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
