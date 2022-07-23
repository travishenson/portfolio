import React from 'react';
import {PageProps} from 'gatsby';
import {Helmet} from 'react-helmet';

import Layout from '../components/layout';
import {textToIcon} from '../shared/utils';

const techList: string[] = [
  'TypeScript',
  'React',
  'GraphQL',
  'Tailwind',
  'Gatsby',
  'Supabase',
];

const AboutPage = ({path}: PageProps) => {
  const pStyles = 'max-w-text mx-auto';

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me | Travis Henson</title>
        <link rel="canonical" href="https://travishenson.com/about" />
      </Helmet>
      <Layout path={path}>
        <div className="mt-8 mx-auto">
          <h2>
            I'm Travis Henson, a JavaScript developer currently based in
            Kentucky.
          </h2>
          <ul className="flex flex-row flex-wrap gap-4 justify-center mt-4 mb-12">
            {techList.map((tech) => textToIcon(tech))}
          </ul>
          <p className={pStyles}>
            As a full-stack developer with a passion for creating clean and
            easy-to-use applications, I place an emphasis on user experience and
            usability. What motivates me is the ongoing challenge of finding
            elegant, code-based solutions to users’ and businesses’ complex
            problems.
          </p>
          <p className={pStyles}>
            Being a web developer allows me to do that on a daily basis. That
            opportunity to learn and grow is what consistently keeps me
            interested and drives me to keep up with the ever-changing landscape
            of the internet and web development.
          </p>
          <p className={pStyles}>
            Outside of that, a few of my main interests are sports, horror
            movies, video games, and photography.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default AboutPage;
