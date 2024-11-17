// src/components/Button.tsx
import React from 'react';
import {
  Button as ChakraButton,
  Spinner,
  useColorModeValue,
} from '@chakra-ui/react';
import { CSSProperties, ReactNode } from 'react';

type ButtonProps = {
  text?: string;
  icon?: ReactNode; // Icon component to display inside the button
  disabled?: boolean; // Disable state
  loading?: boolean; // Show a loading spinner
  size?: 'small' | 'medium' | 'large'; // Size of the button
  onClick?: () => void; // Click event handler
  style?: CSSProperties; // Inline styles
  className?: string; // Additional custom class names
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  disabled = false,
  loading = false,
  size = 'medium',
  onClick,
  style,
  className = '',
}) => {
  // Size styles for button padding and font size
  const sizeStyles = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-3 px-5 text-base',
    large: 'py-4 px-6 text-lg',
  };

  // Theme styles using useColorModeValue
  const bg = useColorModeValue('#007bff', '#333333');
  const color = useColorModeValue('#ffffff', '#ffffff');
  const hoverBg = useColorModeValue('#0056b3', '#555555');

  return (
    <ChakraButton
      className={`${sizeStyles[size]} ${className}`}
      bg={bg}
      color={color}
      _hover={{ bg: hoverBg }}
      _disabled={{ opacity: 0.6, cursor: 'not-allowed' }}
      isDisabled={disabled}
      onClick={!disabled && !loading ? onClick : undefined}
      style={style}
    >
      {loading ? (
        <Spinner size="sm" mr={text ? 2 : 0} />
      ) : (
        icon && <span className="mr-2">{icon}</span>
      )}
      {text}
    </ChakraButton>
  );
};

export default Button;
