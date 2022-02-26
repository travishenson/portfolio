import React from 'react';
import {isMobile} from 'react-device-detect';
import {useRouter} from 'next/router';

import {Button} from '../../atoms/button';

const FirstHomeBlock: React.FC = () => {
  const router = useRouter();

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
          <Button
            variant="primary"
            size={isMobile ? 'sm' : 'md'}
            onClick={() => router.push('/projects')}
          >
            My Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export {FirstHomeBlock};
