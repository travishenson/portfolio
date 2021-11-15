import React from 'react';
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';

import Layout from '../../components/layout';
import { PageTitle } from '../../components/atoms/page-title';
import { getProject } from '../../lib/graphcms/projects';

const Project: NextPage = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout pageTitle={project.title}>
      <PageTitle title={project.title} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const projectName = context?.params?.projectName;
  const project = await getProject(projectName);

  return {
    props: {
      project,
    },
  };
};

export default Project;
