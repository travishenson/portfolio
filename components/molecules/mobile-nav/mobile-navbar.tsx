import React from 'react';
import { MobileNavTab } from './mobile-navbar-tab';

const MobileNavbar: React.FC = () => {
  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-inner">
        <MobileNavTab target={{ href: '/', label: 'Home' }} />
        <MobileNavTab target={{ href: '/about', label: 'About' }} />
        <MobileNavTab target={{ href: '/projects', label: 'Projects' }} />
        <MobileNavTab target={{ href: 'mailto:hello@travishenson.com', label: 'Contact' }} />
      </div>
    </nav>
  );
};

export { MobileNavbar };
