import React from 'react';
import Image from 'next/image';

import { NavLink } from '../atoms/nav-link';

const Navbar: React.FC = () => {
  return (
    <nav className="desktop-nav">
      <div className="nav-inner">
        <NavLink href="/">
          <Image
            src="/images/logo.png"
            width="50px"
            height="50px"
            alt="Travis Henson logo"
          />
        </NavLink>
        <div className="nav-links">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/work">Work</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
