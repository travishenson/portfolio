import React from 'react';

interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({children}) => {
  return <div className="w-full max-w-content mx-auto py-12">{children}</div>;
};

export default ContentWrapper;
