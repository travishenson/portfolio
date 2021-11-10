import React, { useState } from 'react';

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIconTap = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-inner">
        <div>Test</div>
        <div>Test 2</div>
        <div
          className={
            isOpen ? 'hamburger-icon hamburger-icon-open' : 'hamburger-icon'
          }
          onClick={handleIconTap}
        >
          <div className="bar-1" />
          <div className="bar-2" />
          <div className="bar-3" />
        </div>
      </div>
    </nav>
  );
};

export { MobileNavbar };
