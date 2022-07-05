import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {Helmet} from 'react-helmet';

import Layout from '../../components/layout';
import {ProjectCard} from '../../components/cards';

const ProjectsPage = ({path, data}: PageProps<Queries.ProjectsPageQuery>) => {
  const projects = [...data.allGraphCmsProject.nodes];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Travis Henson</title>
        <link rel="canonical" href="https://travishenson.com/projects" />
      </Helmet>
      <Layout path={path}>
        <div>
          {projects.map((project) => (
            <ProjectCard
              {...project}
              key={project.slug}
              image={project.featuredImage?.localFile?.childImageSharp?.gatsbyImageData ?? null}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query ProjectsPage {
    allGraphCmsProject(filter: {stage: {eq: PUBLISHED}}) {
      nodes {
        description
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 560
                layout: CONSTRAINED
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
        finishDate
        liveProjectUrl
        overview
        role
        slug
        startDate
        techStack
        title
      }
    }
  }
`;

export default ProjectsPage;
