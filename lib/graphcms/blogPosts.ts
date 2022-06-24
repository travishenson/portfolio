import {gql} from 'graphql-request';
import {graphcms} from '.';

const getBlogPosts = async () => {
  const blogPostsQuery: {blogPosts: any[]} = await graphcms.request(
    gql`
      query GetAllBlogPosts($stage: Stage!) {
        blogPosts(stage: $stage, orderBy: publishedAt_ASC) {
          id
          title
          slug
        }
      }
    `,
    {
      stage: 'PUBLISHED',
    }
  );

  const {blogPosts} = blogPostsQuery;

  return blogPosts;
};

const getBlogPost = async (slug: string | undefined) => {
  if (!slug) return null;

  const blogPostQuery: { blogPost: any } = await graphcms.request(
    gql`
      {
        blogPost(where: {slug: "${slug}"}) {
          id
          title
          content
          slug
        }
      }
  `
  );

  const {blogPost} = blogPostQuery;

  return blogPost;
};

export {getBlogPosts, getBlogPost};