import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {Helmet} from 'react-helmet';

import Layout from '../components/layout';

const IndexPage = ({path, data}: PageProps<Queries.HomePageQuery>) => {
  const {edges: featuredProjects} = data.featuredProjects;
  console.log(featuredProjects);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Travis Henson | JavaScript Developer</title>
        <link rel="canonical" href="https://travishenson.com" />
      </Helmet>
      <Layout path={path}>
        <h1>Testing</h1>
        {/* {data.featuredProjects.edges.map((project) => {
          const {
            title,
            featuredImage,
            overview,
            techStack,
            slug,
            liveProjectUrl,
          } = project.node;

          return <FeaturedProject project={...project.node} />;
        })} */}
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query HomePage {
    featuredProjects: allGraphCmsProject(
      filter: {stage: {eq: PUBLISHED}, featuredProject: {eq: true}}
      sort: {fields: finishDate, order: DESC}
    ) {
      edges {
        node {
          id
          description
          featuredImage {
            url
          }
          featuredProject
          liveProjectUrl
          overview
          role
          slug
          techStack
          title
        }
      }
    }
  }
`;

export default IndexPage;
