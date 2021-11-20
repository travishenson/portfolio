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
          title={project.title}
          description={project.description}
          imageUrl={project.featuredImage.url}
          slug={project.slug}
          key={project.slug}
          index={index}
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
