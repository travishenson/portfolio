import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {Helmet} from 'react-helmet';

import Layout from '../../components/layout';
import BlogCard from '../../components/cards/blog-card';

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
        <div className="flex flex-col mt-12 gap-16">
          {blogPosts.map((blogPost) => (
            <BlogCard
              {...blogPost}
              key={blogPost.slug}
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
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
        overview
        slug
        title
      }
    }
  }
`;

export default BlogPage;
