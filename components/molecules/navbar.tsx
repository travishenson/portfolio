import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const router = useRouter();
  const routeSlug = router.route.substr(1);

  const parseLinkClass = (routeSlug: string, slug: string) => {
    return routeSlug === slug ? 'active-page' : '';
  };

  return (
    <nav className="desktop-nav">
      <div className="nav-inner">
        <Link href="/">
          <a>
            <img src="/images/logo.png" width="50px" height="50px" />
          </a>
        </Link>
        <div className="nav-links">
          <Link href="/about">
            <a className={parseLinkClass(routeSlug, 'about')}>About</a>
          </Link>
          <Link href="/work">
            <a href="/work" className={parseLinkClass(routeSlug, 'work')}>
              Work
            </a>
          </Link>
          <Link href="/resume">
            <a href="/resume" className={parseLinkClass(routeSlug, 'resume')}>
              Resume
            </a>
          </Link>
          <Link href="/contact">
            <a href="/contact" className={parseLinkClass(routeSlug, 'contact')}>
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
