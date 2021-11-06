import React, { useRef } from 'react';
import { NavLink } from '../atoms/nav-link';
import { useLoadingOverlayContext } from '../../context/loading-overlay-context';

const MobileNav: React.FC = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const { setIsLoading } = useLoadingOverlayContext();

  const detectClick = () => {
    if (checkboxRef.current !== null && checkboxRef.current.checked) {
      document.getElementsByTagName('html')[0].classList.add('no-scroll');
      setTimeout(() => setIsLoading(true), 500);
    } else {
      document.getElementsByTagName('html')[0].classList.remove('no-scroll');
    }
  };

  return (
    <div className="mobile-nav">
      <label>
        <input
          type="checkbox"
          id="mobile-nav-checkbox"
          onClick={detectClick}
          ref={checkboxRef}
        />
        <span className="mobile-menu">
          <span className="hamburger" />
        </span>
        <nav className="mobile-nav-inner">
          <div className="mobile-nav-links">
            <NavLink href="/" isMobile>
              Home
            </NavLink>
            <NavLink href="/about" isMobile>
              About
            </NavLink>
            <NavLink href="/work" isMobile>
              Work
            </NavLink>
            <NavLink href="/resume" isMobile>
              Resume
            </NavLink>
            <NavLink href="/contact" isMobile>
              Contact
            </NavLink>
          </div>
        </nav>
      </label>
      <div></div>
    </div>
  );
};

export { MobileNav };
