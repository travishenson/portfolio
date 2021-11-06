import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({variant, size = 'md', children}: ButtonProps) => {
  const variantClass = variant === 'primary' ? 'primary-button' : 'secondary-button';

  let sizeClass;
  switch (size) {
    case 'xs':
      sizeClass = 'xs-button';
      break;
    case 'sm':
      sizeClass = 'small-button';
      break;
    case 'md':
      sizeClass = 'medium-button';
      break;
    case 'lg':
      sizeClass = 'large-button';
      break;
    default:
      sizeClass = 'medium-button';
  }

  return (
    <button className={`button ${variantClass} ${sizeClass}`}>
      {children}
    </button>
  )
}

export {Button};