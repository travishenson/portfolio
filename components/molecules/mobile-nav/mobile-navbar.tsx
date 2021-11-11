import React from 'react';
import { MobileNavTab } from './mobile-navbar-tab';

const MobileNavbar: React.FC = () => {
  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-inner">
        <MobileNavTab target={{ href: '/', label: 'Home' }} />
        <MobileNavTab target={{ href: '/about', label: 'About' }} />
        <MobileNavTab target={{ href: '/work', label: 'Work' }} />
        <MobileNavTab target={{ href: '/contact', label: 'Contact' }} />
        <MobileNavTab target={{ href: '/resume', label: 'Resume' }} />
      </div>
    </nav>
  );
};

export { MobileNavbar };
