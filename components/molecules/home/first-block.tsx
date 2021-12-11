import React from 'react';
import {isMobile} from 'react-device-detect';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

import {NavLink} from '../../atoms/nav-link';
import {Button} from '../../atoms/button';

const FirstHomeBlock: React.FC = () => {
  return (
    <section className="first-home-block">
      <div className="first-block-inner">
        <div className="first-block-inner-text">
          <h2>Hey, I&apos;m Travis.</h2>
          <h4>
            I&apos;m a JavaScript developer currently working as a web engineer
            for{' '}
            <a href="https://getter.com.au" target="_blank" rel="noreferrer">
              Getter
            </a>
            . I enjoy working across the full stack and have a passion for
            creating clean and easy-to-use sites and applications.
          </h4>
          <NavLink href="/projects">
            <Button variant="primary" size={isMobile ? 'sm' : 'md'}>
              My Projects{' '}
              <HiOutlineArrowNarrowRight style={{marginLeft: '5px'}} />
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export {FirstHomeBlock};
