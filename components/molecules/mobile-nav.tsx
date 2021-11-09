import React, { useState } from 'react';
import { NavLink } from '../atoms/nav-link';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showLinks, setShowLinks] = useState<boolean>(false);

  const handleMobileClick = () => {
    setIsOpen(!isOpen);
    setShowLinks(!showLinks);
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    setTimeout(() => setShowLinks(!showLinks), isOpen ? 0 : 500);
    !isOpen ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
  };

  const innerNavClass = () => {
    return isOpen
      ? 'mobile-nav-inner mobile-inner-nav-open'
      : 'mobile-nav-inner';
  };

  const mobileNavLinkClass = () => {
    return showLinks
      ? 'mobile-nav-links mobile-nav-links-show'
      : 'mobile-nav-links mobile-nav-links-hide';
  };

  // Floating action button classes
  const buttonClass = () => {
    return isOpen
      ? 'floating-action-button fab-open'
      : 'floating-action-button fab-closed';
  };

  const barClass = (baseClass: string) => {
    return isOpen ? `${baseClass} ${baseClass}-open` : baseClass;
  };

  return (
    <div className="mobile-nav">
      <div className="mobile-nav-border" />
      <nav className={innerNavClass()}>
        <div className={mobileNavLinkClass()}>
          <NavLink href="/" isMobile mobileOnClick={handleMobileClick}>
            Home
          </NavLink>
          <NavLink href="/about" isMobile mobileOnClick={handleMobileClick}>
            About
          </NavLink>
          <NavLink href="/work" isMobile mobileOnClick={handleMobileClick}>
            Work
          </NavLink>
          <NavLink href="/resume" isMobile mobileOnClick={handleMobileClick}>
            Resume
          </NavLink>
          <NavLink href="/contact" isMobile mobileOnClick={handleMobileClick}>
            Contact
          </NavLink>
        </div>
      </nav>
      <div className={buttonClass()} onClick={handleButtonClick}>
        <div className={barClass('bar-1')} />
        <div className={barClass('bar-2')} />
        <div className={barClass('bar-3')} />
      </div>
    </div>
  );
};

export { MobileNav };
