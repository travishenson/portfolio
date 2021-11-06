import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useLoadingOverlayContext } from '../../context/loading-overlay-context';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  isMobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  href,
  isMobile,
}: NavLinkProps) => {
  const router = useRouter();
  const { setIsLoading } = useLoadingOverlayContext();

  const handleNavClick = () => {
    if (router.route === href) return;
    
    setIsLoading(true);
    setTimeout(() => router.push(href), 1000);
  }

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => setIsLoading(false), 1000);
    };

    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  const parseLinkClass = (routeSlug: string, slug: string) => {
    return routeSlug === slug ? 'nav-link active-page' : 'nav-link';
  };

  const parseMobileLinkClass = (routeSlug: string, slug: string) => {
    return routeSlug === slug ? 'mobile-nav-link active-mobile-nav-link' : 'mobile-nav-link';
  };

  const anchorClass = !isMobile
    ? parseLinkClass(router.route, href)
    : parseMobileLinkClass(router.route, href);

  return (
    <a onClick={handleNavClick} className={anchorClass}>
      {children}
    </a>
  );
};

export { NavLink };
