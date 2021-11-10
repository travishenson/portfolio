import React, { useState } from 'react';
import { NavLink } from '../atoms/nav-link';
import { HomeIcon, AstronautIcon, BriefcaseIcon } from '../icons';

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIconTap = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-inner">
        <NavLink href="/" isMobile mobileOnClick={handleIconTap}>
          <div className="mobile-nav-tab">
            <HomeIcon width="25px" height="25px" />
          </div>
        </NavLink>
        <NavLink href="/about" isMobile mobileOnClick={handleIconTap}>
          <div className="mobile-nav-tab">
            <AstronautIcon width="25px" height="25px" />
          </div>
        </NavLink>
        <NavLink href="/work" isMobile mobileOnClick={handleIconTap}>
          <div className="mobile-nav-tab">
            <BriefcaseIcon width="25px" height="25px" />
          </div>
        </NavLink>
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
