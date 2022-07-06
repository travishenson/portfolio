import React from 'react';

interface HeroProps {
  children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({children}) => {
  return (
    <div className="w-full bg-brand-black">
      <div className="w-full max-w-content h-[70vh] mx-auto">{children}</div>
    </div>
  );
};

export default Hero;
