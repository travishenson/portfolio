import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {Helmet} from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/layout';

const ProjectPage = (props: PageProps<Queries.ProjectPageQuery>) => {
  const project = {...props.data.graphCmsProject};

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{project.title} | Travis Henson</title>
        <link rel="canonical" href="https://travishenson.com" />
      </Helmet>
      <Layout path={props.path}>
        <ReactMarkdown>{project.pageContent as string}</ReactMarkdown>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ProjectPage($slug: String!) {
    graphCmsProject(slug: {eq: $slug}) {
      description
      featuredImage {
        url
      }
      finishDate
      liveProjectUrl
      overview
      pageContent
      role
      slug
      startDate
      techStack
      title
    }
  }
`;

export default ProjectPage;
