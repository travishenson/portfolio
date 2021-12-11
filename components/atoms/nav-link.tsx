import React from 'react';
import {useRouter} from 'next/router';

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
}: NavLinkProps) => {
  const router = useRouter();

  const parseLinkClass = (routeSlug: string, slug: string) => {
    if (isMobile) {
      return routeSlug === slug
        ? 'mobile-nav-link active-mobile-nav-link'
        : 'mobile-nav-link';
    }
    return routeSlug === slug ? 'nav-link active-page' : 'nav-link';
  };

  return (
    <a onClick={() => router.push(href)} className={parseLinkClass(router.route, href)}>
      {children}
    </a>
  );
};

export {NavLink};
