import React, {useEffect} from 'react';
import { useRouter } from 'next/router';

import { useLoadingOverlayContext } from '../../context/loading-overlay-context';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({children, href}: NavLinkProps) => {
  const router = useRouter();
  const { setIsLoading } = useLoadingOverlayContext();

  const handleNavClick = () => {
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

  const anchorClass = parseLinkClass(router.route, href);

  return (
    <a onClick={handleNavClick} className={anchorClass}>{children}</a>
  )
}

export {NavLink};