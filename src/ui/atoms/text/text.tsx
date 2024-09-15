import clsx from 'clsx';
import { TTextSize, TTextTag, TTextWeight } from '../types/text.types';

interface TextProps {
  as?: TTextTag;
  size?: TTextSize;
  lineHeight?: TTextSize;
  weight?: TTextWeight;
  bold?: boolean;
  italic?: boolean;
  center?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  as: As = 'p',
  size,
  lineHeight,
  weight = 'normal',
  italic = false,
  center = false,
  children,
  className,
}) => {
  const is6xl = size === '6xl' || As === 'h1';
  const is5xl = size === '5xl' || As === 'h2';
  const is4xl = size === '4xl' || As === 'h3';
  const is3xl = size === '3xl' || As === 'h4';
  const is2xl = size === '2xl' || As === 'h5';
  const isXl = size === 'xl' || As === 'h6';
  const isLg = size === 'lg';
  const isBase = size === 'base' || As === 'p' || As === 'span';
  const isSm = size === 'sm';
  const isXs = size === 'xs';

  const sizeClass = clsx(
    is6xl && 'text-6xl',
    is5xl && 'text-5xl',
    is4xl && 'text-4xl',
    is3xl && 'text-3xl',
    is2xl && 'text-2xl',
    isXl && 'text-xl',
    isLg && 'text-lg',
    isBase && 'text-base',
    isSm && 'text-sm',
    isXs && 'text-xs',
  );

  const lineHeightClass = clsx(lineHeight && `leading-${lineHeight}`);
  const weightClass = clsx(weight && `font-${weight}`);
  const italicClass = clsx(italic && 'italic');
  const textPositionClass = clsx(center && 'text-center');

  const finalClass = clsx(
    'font-mono',
    sizeClass,
    lineHeightClass,
    weightClass,
    italicClass,
    textPositionClass,
    className,
  );

  return <As className={finalClass}>{children}</As>;
};

export default Text;
