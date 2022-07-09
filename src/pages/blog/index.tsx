import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {Helmet} from 'react-helmet';

import Layout from '../../components/layout';
import BlogCard from '../../components/cards/blog-card';

import {parseBlogPostDate} from '../../shared/utils';

const BlogPage = ({path, data}: PageProps<Queries.BlogPageQuery>) => {
  const blogPosts = [...data.allGraphCmsBlogPost.nodes];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | Travis Henson</title>
        <link rel="canonical" href="https://travishenson.com/blog" />
      </Helmet>
      <Layout path={path} title="Blog">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((blogPost) => (
            <BlogCard
              {...blogPost}
              key={blogPost.slug}
              publishedAt={parseBlogPostDate(blogPost.publishedAt)}
              image={
                blogPost.featuredImage?.localFile?.childImageSharp
                  ?.gatsbyImageData ?? null
              }
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query BlogPage {
    allGraphCmsBlogPost(filter: {stage: {eq: PUBLISHED}}) {
      nodes {
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 560
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
        }
        overview
        publishedAt
        slug
        title
      }
    }
  }
`;

export default BlogPage;
