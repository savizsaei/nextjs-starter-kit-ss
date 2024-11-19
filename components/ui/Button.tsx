import * as Headless from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import { Link } from './Link';

const sizeStyles = {
  small: 'py-2 px-4 text-sm',
  medium: 'py-3 px-5 text-base',
  large: 'py-4 px-6 text-lg',
};

const baseStyles =
  'relative inline-flex items-center justify-center rounded-lg border font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';

const colorStyles = {
  primary: 'bg-blue-600 text-white border-transparent hover:bg-blue-700',
  secondary: 'bg-gray-600 text-white border-transparent hover:bg-gray-700',
  danger: 'bg-red-600 text-white border-transparent hover:bg-red-700',
  success: 'bg-green-600 text-white border-transparent hover:bg-green-700',
  warning: 'bg-yellow-600 text-white border-transparent hover:bg-yellow-700',

};

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  size?: keyof typeof sizeStyles;
  color?: keyof typeof colorStyles;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  href?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  disabled = false,
  loading = false,
  size = 'medium',
  color = 'primary',
  onClick,
  style,
  className = '',
  href,
}) => {
  const classes = clsx(
    baseStyles,
    sizeStyles[size],
    colorStyles[color],
    className,
    { 'opacity-50 cursor-not-allowed': disabled || loading },
  );

  const content = (
    <>
      {loading && <span className="loader" />}
      {icon && <span className="icon">{icon}</span>}
      <span>{text}</span>
    </>
  );

  return href ? (
    <Link href={href} className={classes} style={style}>
      {content}
    </Link>
  ) : (
    <Headless.Button
      onClick={onClick}
      className={classes}
      style={style}
      disabled={disabled || loading}
    >
      {content}
    </Headless.Button>
  );
};

export default Button;
