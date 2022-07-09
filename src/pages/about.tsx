import React, {ReactNode} from 'react';
import {graphql, PageProps} from 'gatsby';
import {Helmet} from 'react-helmet';
import ReactMarkdown from 'react-markdown';

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
        <div className="max-w-text mx-auto mt-8">
          <ReactMarkdown
            components={{
              p({node, className, children, ...props}) {
                return (
                  <p
                    className="mt-8"
                    children={String(children).replace(/\n$/, '')}
                    {...props}
                  />
                );
              },
              h4({children}) {
                return (
                  <h4 className="text-center mt-12">{children}</h4>
                )
              },
              ul({children}) {
                return (
                  <div className="flex flex-row flex-wrap gap-4 justify-center mt-4 mb-12">
                    {children}
                  </div>
                );
              },
              li({node, className, children, ...props}) {
                return textToIcon(children.toString());
              },
            }}
          >
            {pageContent}
          </ReactMarkdown>
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
