type BalloonProps = {
  content: string;
};

export const Balloon: React.FC<BalloonProps> = ({ content }) => {
  return <p>{content}</p>;
};
