import React from 'react';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const router = useRouter();
  const routeSlug = router.route.substr(1);

  const parseLinkClass = (routeSlug: string, slug: string) => {
    return routeSlug === slug ? 'active-page' : '';
  };

  return (
    <nav>
      <div className="nav-inner">
        <a href="/">
          <img src="/images/logo.png" width="50px" height="50px" />
        </a>
        <div className="nav-links">
          <a href="/about" className={parseLinkClass(routeSlug, 'about')}>
            About
          </a>
          <a href="/work" className={parseLinkClass(routeSlug, 'work')}>
            Work
          </a>
          <a href="/resume" className={parseLinkClass(routeSlug, 'resume')}>
            Resume
          </a>
          <a href="/contact" className={parseLinkClass(routeSlug, 'contact')}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
