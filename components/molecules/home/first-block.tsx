import React from 'react';
import { NavLink } from '../../atoms/nav-link';
import { Button } from '../../atoms/button';

const FirstHomeBlock: React.FC = () => {
  return (
    <section className="first-home-block">
      <div className="first-block-inner">
        <div className="first-block-inner-text">
          <h1>Hey, I&apos;m Travis.</h1>
          <br />
          <p>
            I&apos;m a full-stack JavaScript developer with a passion for
            creating clean and easy-to-use sites and applications.
          </p>
          <NavLink href="/work">
            <Button variant="primary" size="md">
              My work
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export { FirstHomeBlock };
