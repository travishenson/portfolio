import React from 'react';

import { NavLink } from '../atoms/nav-link';

const Navbar: React.FC = () => {
  return (
    <nav className="desktop-nav">
      <div className="nav-inner">
        <NavLink href="/">
          <img src="/images/logo.png" width="50px" height="50px" />
        </NavLink>
        <div className="nav-links">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/work">Work</NavLink>
          <NavLink href="/resume">Resume</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
