import React from 'react';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';

import Layout from '../components/layout';
import { getFeaturedProjects } from '../lib/graphcms/projects';

// Home page blocks
import { FirstHomeBlock, SecondHomeBlock } from '../components/molecules/home';

const Index: NextPage = ({
  featuredProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout pageTitle="Home">
      <FirstHomeBlock />
      <SecondHomeBlock featuredProjects={featuredProjects} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredProjects = await getFeaturedProjects();

  return {
    props: {
      featuredProjects,
    },
  };
};

export default Index;
