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
  const sectionHeaderStyle = 'text-xl md:text-3xl max-w-lg mb-8';
  const pStyles = 'max-w-text mx-auto my-8';

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me | Travis Henson</title>
        <link rel="canonical" href="https://travishenson.com/about" />
      </Helmet>
      <Layout path={path}>
        <div className="mt-8 mx-auto">
          <div className="max-w-text mx-auto">
            <h1 className={sectionHeaderStyle}>
              I'm Travis Henson, a JavaScript developer currently based in
              Kentucky.
            </h1>
          </div>
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
            Here are some tools and technologies I've been enjoying a lot
            lately:
          </p>
          <div className="max-w-text mx-auto">
            <ul className="flex flex-row flex-wrap gap-4 justify-center my-12">
              {techList.map((tech) => textToIcon(tech))}
            </ul>
          </div>
          <div className="max-w-text mx-auto">
            <h2 className={sectionHeaderStyle}>Experience</h2>
          </div>
          <div className="max-w-text mx-auto">
            <h2 className={sectionHeaderStyle}>Education</h2>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutPage;
