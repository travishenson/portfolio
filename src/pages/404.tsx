import React from 'react';
import {PageProps, Link} from 'gatsby';
import {Helmet} from 'react-helmet';

import Layout from '../components/layout';
import gandalfGif from '../images/gifs/lost-gandalf.gif';

const NotFoundPage = ({path}: PageProps) => {
  const gifWidth = 475;
  const gifHeight = gifWidth * 0.47222222222;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 Page Not Found | Travis Henson</title>
      </Helmet>
      <Layout path={path}>
        <div className="w-full max-w-content mx-auto pt-10">
          <div className="w-full">
            <h1 className="w-full text-center italic">
              Gandalf has no memory of this place...
            </h1>
            <div className="w-full max-w-content">
              <img
                src={gandalfGif}
                width={gifWidth}
                height={gifHeight}
                alt="Gandalf the Grey is very confused in the Mines of Moria"
                className="mx-auto"
              />
            </div>
            <div className="my-4 mx-auto w-full max-w-text">
              <p>
                The page you were looking for doesn&apos;t seem to
                exist&mdash;or simply couldn&apos;t be found.
              </p>
              <p>
                If you think that page should exist, double check the URL or{' '}
                <a href="mailto:hello@travishenson.com?subject=Broken%20URL%20on%20Your%20Website">
                  send me an email
                </a>{' '}
                about the broken link. I&apos;ll do my best to fix the issue and
                pass along my appreciation!
              </p>
              <p>
                To get you back on your way, you can{' '}
                <Link to="/">return home</Link>, find out more{' '}
                <Link to="/about">about me</Link>, or view some of{' '}
                <Link to="/projects">my projects</Link>.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
