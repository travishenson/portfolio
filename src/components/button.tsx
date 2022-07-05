import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  size = 'md',
  children,
}: ButtonProps) => {
  const baseClass =
    'border-none rounded-lg font-outfit flex justify-center items-center mt-3 my-1 capitalize hover:cursor-pointer';

  const variantClass =
    variant === 'primary'
      ? 'bg-brand-blue-500 text-brand-grey-100 hover:bg-brand-blue-600'
      : 'bg-brand-blue-100 text-brand-blue-900 hover:bg-brand-blue-200';

  let sizeClass;
  switch (size) {
    case 'xs':
      sizeClass = 'text-sm min-w-[75px]';
      break;
    case 'sm':
      sizeClass = 'text-base min-w-[100px] p-1';
      break;
    case 'lg':
      sizeClass = 'text-xl min-[175px] p-3';
      break;
    default:
      sizeClass = 'text-lg min-w-[150px] p-2';
  }

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export {Button};
