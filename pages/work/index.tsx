import React from 'react';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { isMobile } from 'react-device-detect';

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
      {isMobile ? 'Mobile' : 'Not Mobile'}
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
  const projects = await getAllProjects();

  return {
    props: {
      projects,
    },
  };
};

export default Work;
