import React, {useEffect} from 'react';
import {useRouter} from 'next/router';

import {useLoadingOverlayContext} from '../../context/loading-overlay-context';

interface NavLinkProps {
  children?: React.ReactNode;
  href: string;
  isMobile?: boolean;
  mobileOnClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  href,
  isMobile,
  mobileOnClick,
}: NavLinkProps) => {
  const router = useRouter();
  const {setIsLoading} = useLoadingOverlayContext();

  const handleNavClick = () => {
    if (router.route === href) {
      return setIsLoading(false);
    }

    if (mobileOnClick) {
      setTimeout(() => mobileOnClick(), 250);
    }

    setIsLoading(true);

    setTimeout(() => router.push(href), 500);
  };

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => setIsLoading(false), 1000);
    };

    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router, setIsLoading]);

  const parseLinkClass = (routeSlug: string, slug: string) => {
    if (isMobile) {
      return routeSlug === slug
        ? 'mobile-nav-link active-mobile-nav-link'
        : 'mobile-nav-link';
    }
    return routeSlug === slug ? 'nav-link active-page' : 'nav-link';
  };

  return (
    <a onClick={handleNavClick} className={parseLinkClass(router.route, href)}>
      {children}
    </a>
  );
};

export {NavLink};
