import React from 'react';
import { useScreenSize } from '../../hooks/use-screen-size';
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../icons';

const Footer: React.FC = () => {
  const { isMobile } = useScreenSize();
  const iconSize = '30px';

  return (
    <footer className={isMobile ? 'footer-mobile' : 'footer-desktop'}>
      <div className="footer-inner">
        <div className="footer-links">
          <GithubIcon width={iconSize} height={iconSize} color="#F2F2F2" />
          <InstagramIcon width={iconSize} height={iconSize} color="#F2F2F2" />
          <LinkedinIcon width={iconSize} height={iconSize} color="#F2F2F2" />
          <TwitterIcon width={iconSize} height={iconSize} color="#F2F2F2" />
        </div>
        <div className="footer-copyright">
          <p>&copy; Travis Henson {new Date().getFullYear()}</p>
          <p>Designed and Developed by Travis Henson.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
