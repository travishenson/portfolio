import React, { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MobileNav: React.FC = () => {
  const router = useRouter();
  const routeSlug = router.route.substr(1);

  const parseLinkClass = (routeSlug: string, slug: string) => {
    return routeSlug === slug ? 'active-mobile-nav-link' : '';
  };

  const checkboxRef = useRef<HTMLInputElement>(null);

  const closeNav = () => {
    if (checkboxRef.current !== null) {
      checkboxRef.current.checked = false;
      document.getElementsByTagName('html')[0].classList.remove('no-scroll');
    }
  };

  const detectClick = () => {
    if (checkboxRef.current !== null && checkboxRef.current.checked) {
      document.getElementsByTagName('html')[0].classList.add('no-scroll');
    } else {
      document.getElementsByTagName('html')[0].classList.remove('no-scroll');
    }
  };

  const handleNavClick = () => {
    setTimeout(closeNav, 500)
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
            <Link href="/about">
              <a
                href="/about"
                className={parseLinkClass(routeSlug, 'about')}
                onClick={handleNavClick}
              >
                About
              </a>
            </Link>
            <Link href="/work">
              <a
                className={parseLinkClass(routeSlug, 'work')}
                onClick={handleNavClick}
              >
                Work
              </a>
            </Link>
            <Link href="/resume">
              <a
                className={parseLinkClass(routeSlug, 'resume')}
                onClick={handleNavClick}
              >
                Resume
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={parseLinkClass(routeSlug, 'contact')}
                onClick={handleNavClick}
              >
                Contact
              </a>
            </Link>
          </div>
        </nav>
      </label>
      <div></div>
    </div>
  );
};

export { MobileNav };
