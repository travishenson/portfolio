import React, {useEffect, useState} from 'react';

import {NavLink} from '../atoms/nav-link';
import {EmailButton} from '../atoms/email-button';
import Logo from '../atoms/logo';

const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(true);
  const [showShadow, setShowShadow] = useState<boolean>(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;

      if (currentScrollPos <= 0) {
        setShowShadow(false);
      } else {
        setShowShadow(true);
      }

      if (prevScrollPos > currentScrollPos || prevScrollPos <= 0) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      prevScrollPos = currentScrollPos;
    };
  });

  return (
    <nav
      className={`desktop-nav ${
        !showNav ? 'desktop-nav-hidden' : 'desktop-nav-show'
      } ${!showShadow ? 'desktop-nav-no-shadow' : 'desktop-nav-shadow'}`}
    >
      <div className="nav-inner">
        <NavLink href="/">
          <div className="navbar-logo">
            <Logo />
          </div>
        </NavLink>
        <div className="nav-right">
          <div className="nav-links">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
          </div>
          <EmailButton />
        </div>
      </div>
    </nav>
  );
};

export {Navbar};
