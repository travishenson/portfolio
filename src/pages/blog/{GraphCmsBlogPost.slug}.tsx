import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {Helmet} from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/layout';

const BlogPost = ({data, path}: PageProps<Queries.BlogPostQuery>) => {
  const blogPost = {...data.graphCmsBlogPost};

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{blogPost.title} | Travis Henson</title>
        <link rel="canonical" href="https://travishenson.com" />
      </Helmet>
      <Layout path={path}>
        <ReactMarkdown>{blogPost.content as string}</ReactMarkdown>
      </Layout>
    </>
  );
};

export const query = graphql`
  query BlogPost($slug: String!) {
    graphCmsBlogPost(slug: {eq: $slug}) {
      content
      slug
      title
    }
  }
`;

export default BlogPost;
