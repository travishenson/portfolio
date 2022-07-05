import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {Helmet} from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/layout';
import {Button} from '../components/button';

const AboutPage = ({
  path,
  data,
}: PageProps<Queries.AboutPageQuery>) => {
  const pageContent = data?.aboutMe?.content as string;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me | Travis Henson</title>
        <link rel="canonical" href="https://travishenson.com/about" />
      </Helmet>
      <Layout path={path}>
        <div className="about-main">
          <ReactMarkdown>{pageContent}</ReactMarkdown>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query AboutPage {
    aboutMe: graphCmsPageContent(pageSlug: {eq: "about"}) {
      pageSlug
      content
    }
  }
`;

export default AboutPage;
