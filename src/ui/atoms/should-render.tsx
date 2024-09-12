interface ShouldRenderProps {
  if: boolean;
  children?: React.ReactNode;
}

const ShouldRender: React.FC<ShouldRenderProps> = ({
  if: condition,
  children,
}) => (condition ? children : null);

export default ShouldRender;
