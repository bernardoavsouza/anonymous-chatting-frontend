type BalloonProps = {
  content: string;
  timestamp: Date;
};

export const Balloon: React.FC<BalloonProps> = ({ content, timestamp }) => {
  const time = timestamp.toLocaleTimeString().slice(0, 4);
  return (
    <div>
      <p>{content}</p>
      <p role="time">{time}</p>
    </div>
  );
};
