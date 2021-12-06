import { NextPage } from 'next';
import Image from 'next/dist/client/image';

import Layout from '../components/layout';
import { PageTitle } from '../components/atoms/page-title';
import { Button } from '../components/atoms/button';
import { NavLink } from '../components/atoms/nav-link';

const Custom404: NextPage = () => {
  const gifWidth = 500;
  const gifHeight = gifWidth * 0.47222222222;

  return (
    <Layout pageTitle="Page Not Found">
      <main className="error-page">
        <PageTitle title="Gandalf has no memory of this place..." />
        <div className="err-gif">
          <Image
            src="https://media.graphcms.com/OkcVNJSRSHCXiaXUGauF"
            width={`${gifWidth}px`}
            height={`${gifHeight}px`}
            alt="Gandalf the Grey is very confused in the Mines of Moria"
          />
        </div>
        <h3>...and neither do I.</h3>
        <div className="err-paragraphs">
          <p>
            The page you were looking for doesn&apos;t seem to exist&mdash;or simply
            couldn&apos;t be found.
          </p>
          <p>
            If you think that page should exist, double check the URL or{' '}
            <a href="mailto:hello@travishenson.com?subject=Broken%20URL%20on%20Your%20Website">
              send me an email
            </a>{' '}
            about the broken link. I&apos;ll do my best to fix the issue and pass along my appreciation!
          </p>
          <p>
            To get you back on your way, here are some potentially helpful links
            for you to follow:
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              margin: '2rem auto',
              maxWidth: 'max-content',
            }}
          >
            <NavLink href="/">
              <Button variant="primary">Return Home</Button>
            </NavLink>
            <NavLink href="/about">
              <Button variant="primary">About Me</Button>
            </NavLink>
            <NavLink href="/projects">
              <Button variant="primary">My Projects</Button>
            </NavLink>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Custom404;
