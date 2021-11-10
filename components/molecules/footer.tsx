import React from 'react';
import Image from 'next/image';
import { useScreenSize } from '../../hooks/use-screen-size';
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../icons';

const Footer: React.FC = () => {
  const {isMobile} = useScreenSize();
  
  return (
    <footer className={isMobile ? 'footer-mobile' : ''}>
      <div className="footer-inner">
        <div className="footer-logo">
          <Image
            src="/images/logo.png"
            width="100%"
            height="100%"
            alt="Travis Henson logo"
          />
        </div>
        <div className="footer-links">
          <GithubIcon width="35px" height="35px" color="#F2F2F2" />
          <InstagramIcon width="35px" height="35px" color="#F2F2F2" />
          <LinkedinIcon width="35px" height="35px" color="#F2F2F2" />
          <TwitterIcon width="35px" height="35px" color="#F2F2F2" />
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
