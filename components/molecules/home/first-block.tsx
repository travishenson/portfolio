import React from 'react';
import { NavLink } from '../../atoms/nav-link';
import { Button } from '../../atoms/button';

const FirstHomeBlock: React.FC = () => {
  return (
    <div className="first-home-block">
      <div className="first-block-inner">
        <div className="first-block-inner-text">
          <h1>Hi, I&apos;m Travis, a full-stack JavaScript developer.</h1>
          <br />
          <h2>
            I have a passion for creating clean and easy-to-use sites and
            applications. Currently, I&apos;m working (remotely) as a contractor
            building and maintaining{' '}
            <a href="https://getter.com.au" target="_blank" rel="noreferrer">
              Getter
            </a>
            .
          </h2>
          <br />
          <NavLink href="/work">
            <Button variant="primary" size="lg">
              My work
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { FirstHomeBlock };
