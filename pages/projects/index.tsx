import React from 'react';
import {NextPage, GetStaticProps, InferGetStaticPropsType} from 'next';

import Layout from '../../components/layout';
import {ProjectTile} from '../../components/molecules/project-tile';
import {getProjects, ProjectType} from '../../lib/graphcms/projects';

const Projects: NextPage = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout pageTitle="Projects">
      {projects.map((project: ProjectType) => (
        <div key={project.slug} style={{marginBottom: '35px'}}>
          <ProjectTile
            imageUrl={project.featuredImage.url}
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
