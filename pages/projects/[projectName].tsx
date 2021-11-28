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
  const {
    client,
    description,
    liveProjectUrl,
    startDate,
    role,
    techStack,
    title,
  } = project;

  return (
    <Layout pageTitle={title}>
      <PageTitle title={title} />
      <p>Client: {client}</p>
      <p>{liveProjectUrl}</p>
      <p>{startDate}</p>
      <p>{role}</p>
      <p>{techStack[0]}</p>
      <p>{description}</p>
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
  const projectName = context.params?.projectName as string;
  const project = await getProject(projectName);

  return {
    props: {
      project,
    },
  };
};

export default Project;
