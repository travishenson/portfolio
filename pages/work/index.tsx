import React from 'react';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';

import Layout from '../../components/layout';
import { PageTitle } from '../../components/atoms/page-title';
import { ProjectTile } from '../../components/molecules/project-tile';
import { getAllProjects, ProjectType } from '../../lib/graphcms/projects';

const Work: NextPage = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout pageTitle="Work">
      <PageTitle title="Work" />
      {projects.map((project: ProjectType, index: number) => (
        <ProjectTile
          imageUrl={project.featuredImage.url}
          index={index}
          key={project.slug}
          {...project}
        />
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects();

  return {
    props: {
      projects,
    },
  };
};

export default Work;
