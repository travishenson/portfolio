import React from 'react';
import {NextPage, GetStaticProps, InferGetStaticPropsType} from 'next';

import Layout from '../../components/layout';
import {getBlogPosts} from '../../lib/graphcms/blogPosts';

const Blog: NextPage = ({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout pageTitle="Blog">
      {blogPosts.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts: any[] = await getBlogPosts();

  return {
    props: {
      blogPosts,
    },
  };
};

export default Blog;
