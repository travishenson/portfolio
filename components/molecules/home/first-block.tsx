import React from 'react';
import { isMobile } from 'react-device-detect';

import { NavLink } from '../../atoms/nav-link';
import { Button } from '../../atoms/button';

const FirstHomeBlock: React.FC = () => {
  return (
    <section className="first-home-block">
      <div className="first-block-inner">
        <div className="first-block-inner-text">
          <h2>Hey, I&apos;m Travis.</h2>
          <h4>
            I&apos;m a full-stack JavaScript developer currenly working as a
            contractor for{' '}
            <a href="https://getter.com.au" target="_blank" rel="noreferrer">
              Getter
            </a>
            . I enjoy working and learning across the stack and have a passion for creating
            clean and easy-to-use sites and applications.
          </h4>
          <NavLink href="/work">
            <Button variant="primary" size={isMobile ? 'md' : 'lg'}>
              My work
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export { FirstHomeBlock };
