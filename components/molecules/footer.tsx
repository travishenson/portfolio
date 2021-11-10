import React from 'react';
import Image from 'next/image';
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../icons';

const Footer: React.FC = () => (
  <footer>
    <div className="footer-inner">
      <Image
        src="/images/logo.png"
        width="50px"
        height="50px"
        className="footer-logo"
        alt="Travis Henson logo"
      />
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

export { Footer };
