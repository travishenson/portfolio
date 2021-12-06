import React from 'react';
import { isMobile } from 'react-device-detect';
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from '../icons';

const Footer: React.FC = () => {
  const iconSize = '25px';

  return (
    <footer className={isMobile ? 'footer-mobile' : 'footer-desktop'}>
      <div className="footer-inner">
        <div className="footer-links">
          <a href="mailto:hello@travishenson.com">
            <MailIcon width={iconSize} height={iconSize} color="#F2F2F2" />
          </a>
          <GithubIcon width={iconSize} height={iconSize} color="#F2F2F2" />
          <InstagramIcon width={iconSize} height={iconSize} color="#F2F2F2" />
          <LinkedinIcon width={iconSize} height={iconSize} color="#F2F2F2" />
          <TwitterIcon width={iconSize} height={iconSize} color="#F2F2F2" />
        </div>
        <div className="footer-copyright text-small">
          <span>&copy; Travis Henson {new Date().getFullYear()}</span>
          <br />
          <span>Designed and Developed by Travis Henson.</span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
