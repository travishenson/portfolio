import React, {useEffect, useState} from 'react';
import {Link} from 'gatsby';

import {EmailButton} from '../email-button';
import Logo from '../logo';

interface NavLinkProps {
  children: React.ReactNode;
  currentSlug: string;
  href: string;
  isLogo?: boolean;
  isMobile?: boolean;
}

interface NavbarProps {
  currentSlug: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  currentSlug,
  href,
  isLogo = false,
}: NavLinkProps) => {
  const isActive = `/${currentSlug}` === href;

  return (
    <Link
      to={href}
      className={`hover:text-brand-grey-100 relative transition-all duration-300 tracking-[1px] group 
        ${isActive ? 'text-brand-grey-100' : 'text-brand-grey-300'}  
        ${href === '/' ? '' : 'ml-12'}
      `}
    >
      {children}
      <span
        className={`bg-brand-grey-100 h-[2px] w-full absolute left-0 bottom-0 opacity-0 transition-all duration-300 
          ${isActive && !isLogo ? 'opacity-100' : ''}
          ${!isLogo ? 'group-hover:opacity-100' : ''}
        `}
      />
    </Link>
  );
};

const Navbar: React.FC<NavbarProps> = ({currentSlug}) => {
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

      prevScrollPos = currentScrollPos;
    };
  });

  return (
    <nav
      className={`font-outfit h-[100px] px-16 fixed top-0 w-full transition-all duration-250 z-10 ${
        !showShadow ? '' : 'bg-brand-black h-[75px] px-16'
      }`}
    >
      <div className="flex flex-row h-full justify-between items-center my-0 mx-auto max-w-content">
        <NavLink href="/" currentSlug={currentSlug} isLogo>
          <div className="w-[45px] h-[45px]">
            <Logo />
          </div>
        </NavLink>
        <div className="flex">
          <div className="flex flex-row items-center mr-12">
            <NavLink href="/about" currentSlug={currentSlug}>
              About
            </NavLink>
            <NavLink href="/projects" currentSlug={currentSlug}>
              Projects
            </NavLink>
            <NavLink href="/blog" currentSlug={currentSlug}>
              Blog
            </NavLink>
          </div>
          <EmailButton />
        </div>
      </div>
    </nav>
  );
};

export {Navbar};
