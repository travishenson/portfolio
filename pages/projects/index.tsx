import React from 'react';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';

import Layout from '../../components/layout';
import { PageTitle } from '../../components/atoms/page-title';
import { ProjectTile } from '../../components/molecules/project-tile';
import { getProjects, ProjectType } from '../../lib/graphcms/projects';

const Projects: NextPage = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout pageTitle="Projects">
      <PageTitle title="Projects" />
      {projects.map((project: ProjectType, index: number) => (
        <div key={project.slug} style={{marginBottom: '35px'}}>
          <ProjectTile
            imageUrl={project.featuredImage.url}
            tileBgColorHex={project.tileBgColor.hex}
            index={index}
            key={project.slug}
            {...project}
          />
        </div>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
