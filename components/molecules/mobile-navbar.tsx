import React, { useState } from 'react';
import { NavLink } from '../atoms/nav-link';
import { HomeIcon, AstronautIcon, BriefcaseIcon } from '../icons';

interface NavTabTarget {
  href: string;
  label: string;
}

interface MobileNavTabProps {
  target: NavTabTarget;
}

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const MobileNavTab: React.FC<MobileNavTabProps> = ({
    target,
  }: MobileNavTabProps) => {
    const handleIconTap = () => {
      setIsOpen(!isOpen);
    };

    let tabIcon;
    const iconSize = '30px';

    switch (target.label) {
      case 'Home':
        tabIcon = <HomeIcon width={iconSize} height={iconSize} />;
        break;
      case 'About':
        tabIcon = <AstronautIcon width={iconSize} height={iconSize} />;
        break;
      case 'Work':
        tabIcon = <BriefcaseIcon width={iconSize} height={iconSize} />;
    }

    return (
      <div className="mobile-nav-tab">
        <NavLink href={target.href} isMobile mobileOnClick={handleIconTap}>
          <div className="nav-tab-inner">
            {tabIcon}
            {target.label}
          </div>
        </NavLink>
      </div>
    );
  };

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-inner">
        <MobileNavTab target={{ href: '/', label: 'Home' }} />
        <MobileNavTab target={{ href: '/about', label: 'About' }} />
        <MobileNavTab target={{ href: '/work', label: 'Work' }} />
        <div
          className={
            isOpen
              ? 'hamburger-icon mobile-nav-tab hamburger-icon-open'
              : 'hamburger-icon mobile-nav-tab'
          }
          // onClick={handleIconTap}
        >
          <div className="nav-tab-inner">
            <div className="bar-1" />
            <div className="bar-2" />
            <div className="bar-3" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export { MobileNavbar };
