import React from 'react';
import {useRouter} from 'next/router';
import {NavLink} from '../../atoms/nav-link';
import {
  HomeIcon,
  PersonIcon,
  BriefcaseIcon,
  MailIcon,
  DocumentIcon,
} from '../../icons';

interface NavTabTarget {
  href: string;
  label: string;
}

interface MobileNavTabProps {
  target: NavTabTarget;
}

export const MobileNavTab: React.FC<MobileNavTabProps> = ({
  target,
}: MobileNavTabProps) => {
  const router = useRouter();

  let tabIcon;
  const iconSize = '25px';

  switch (target.label) {
    case 'Home':
      tabIcon = (
        <HomeIcon
          width={iconSize}
          height={iconSize}
          style={router.route === '/' ? 'filled' : 'outline'}
        />
      );
      break;
    case 'About':
      tabIcon = (
        <PersonIcon
          width={iconSize}
          height={iconSize}
          style={router.route === '/about' ? 'filled' : 'outline'}
        />
      );
      break;
    case 'Projects':
      tabIcon = (
        <BriefcaseIcon
          width={iconSize}
          height={iconSize}
          style={router.route === '/projects' ? 'filled' : 'outline'}
        />
      );
      break;
    case 'Contact':
      tabIcon = (
        <MailIcon
          width={iconSize}
          height={iconSize}
          style={router.route === '/contact' ? 'filled' : 'outline'}
        />
      );
      break;
    case 'Resume':
      tabIcon = (
        <DocumentIcon
          width={iconSize}
          height={iconSize}
          style={router.route === '/resume' ? 'filled' : 'outline'}
        />
      );
  }

  return (
    <div className="mobile-nav-tab">
      {target.label === 'Contact' ? (
        <div className="nav-tab-inner" onClick={() => router.replace(target.href)}>
          {tabIcon}
          {target.label}
        </div>
      ) : (
        <NavLink href={target.href} isMobile>
          <div className="nav-tab-inner">
            {tabIcon}
            {target.label}
          </div>
        </NavLink>
      )}
    </div>
  );
};
