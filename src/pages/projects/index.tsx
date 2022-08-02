import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {Helmet} from 'react-helmet';

import Layout from '../../components/layout';
import {ProjectCard} from '../../components/cards';

const ProjectsPage = ({path, data}: PageProps<Queries.ProjectsPageQuery>) => {
  const {edges: projects} = data.projects;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Travis Henson</title>
        <link rel="canonical" href="https://travishenson.com/projects" />
      </Helmet>
      <Layout path={path} title="Projects">
        <div className="flex flex-col mt-12 gap-16">
          {projects.map((project, index) => {
            const {featuredImage, projectType, slug} = project.node;

            return (
              <ProjectCard
                {...project.node}
                key={slug}
                index={index}
                image={featuredImage}
                type={projectType}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query ProjectsPage {
    projects: allGraphCmsProject(
      filter: {stage: {eq: PUBLISHED}}
      sort: {fields: finishDate, order: DESC}
    ) {
      edges {
        node {
          id
          featuredImage {
            gatsbyImageData(width: 1500, layout: CONSTRAINED, placeholder: BLURRED)
          }
          featuredProject
          finishDate
          liveProjectUrl
          overview
          projectType
          role
          slug
          startDate
          techStack
          title
        }
      }
    }
  }
`;

export default ProjectsPage;
