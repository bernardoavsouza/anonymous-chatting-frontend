import clsx from 'clsx';

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export const Text: React.FC<TextProps> = ({ children, className }) => {
  return <p className={clsx('text-wrap', className)}>{children}</p>;
};
