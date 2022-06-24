import React from 'react';
import {NextPage, GetStaticProps, InferGetStaticPropsType} from 'next';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/layout';

import {getBlogPosts, getBlogPost} from '../../lib/graphcms/blogPosts';

const BlogPost: NextPage = ({
  blogPost,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout pageTitle={blogPost.title}>
      <ReactMarkdown>{blogPost.content}</ReactMarkdown>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;

  if (!slug) {
    return {
      props: {
        blogPost: null,
      },
    };
  }

  const post = await getBlogPost(slug);

  return {
    props: {
      blogPost: post,
    },
  };
};

export async function getStaticPaths() {
  const blogPosts: any[] = await getBlogPosts();

  const mappedSlugs: string[] = blogPosts.map((post) => `/blog/${post.slug}`);

  return {
    paths: mappedSlugs,
    fallback: false,
  };
}

export default BlogPost;
