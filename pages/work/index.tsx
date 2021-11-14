import React from 'react';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';

import Layout from '../../components/layout';
import { PageTitle } from '../../components/atoms/page-title';
import { getAllProjects } from '../../lib/graphcms/projects';

const Work: NextPage = ({projects}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout pageTitle="Work">
      <PageTitle title="Work" />
      <p>There are {projects.length} published projects.</p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { projects } = await getAllProjects();

  return {
    props: {
      projects
    }
  }
}

export default Work;
