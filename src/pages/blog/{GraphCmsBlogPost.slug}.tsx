import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {Helmet} from 'react-helmet';
import Markdown from 'markdown-to-jsx';

import Layout from '../../components/layout';

const BlogPost = ({data, path}: PageProps<Queries.BlogPostQuery>) => {
  const blogPost = {...data.graphCmsBlogPost};

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{blogPost.title} | Travis Henson</title>
        <link
          rel="canonical"
          href={`https://travishenson.com/blog/${blogPost.slug}`}
        />
      </Helmet>
      <Layout path={path}>
        <Markdown>{blogPost.content as string}</Markdown>
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
