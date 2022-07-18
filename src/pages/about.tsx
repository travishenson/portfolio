import React, {ReactNode} from 'react';
import {graphql, PageProps} from 'gatsby';
import {Helmet} from 'react-helmet';
import Markdown from 'markdown-to-jsx';

import Layout from '../components/layout';
import {textToIcon} from '../shared/utils';

const AboutPage = ({path, data}: PageProps<Queries.AboutPageQuery>) => {
  const pageContent = data?.aboutMe?.content as string;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me | Travis Henson</title>
        <link rel="canonical" href="https://travishenson.com/about" />
      </Helmet>
      <Layout path={path}>
        <div className="mt-8 mx-auto">
          <Markdown
            options={{
              overrides: {
                h3: ({children}: {children: ReactNode}) => (
                  <h1 className="text-center mt-12">{children}</h1>
                ),
                h4: ({children}: {children: ReactNode}) => (
                  <h4 className="text-center mt-12">{children}</h4>
                ),
                ul: ({children}: {children: ReactNode}) => (
                  <div className="flex flex-row flex-wrap gap-4 justify-center mt-4 mb-12">
                    {children}
                  </div>
                ),
                li: ({children}: {children: ReactNode}) =>
                  textToIcon(children?.toString() || ''),
                p: ({children}: {children: ReactNode}) => (
                  <p className="mt-8 mx-auto">{children}</p>
                ),
              },
            }}
          >
            {pageContent}
          </Markdown>
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
