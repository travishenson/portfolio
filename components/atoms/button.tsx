import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({variant}: ButtonProps) => {
  const innerText = variant === 'primary' ? 'Primary Button' : 'Secondary Button';

  return (
    <button>
      {innerText}
    </button>
  )
}

export {Button};