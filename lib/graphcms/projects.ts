import { gql } from 'graphql-request';
import { graphcms } from '.';

type FeaturedImage = {
  url: string;
}

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  featuredImage: FeaturedImage;
  role: string;
  techStack: string[];
  slug: string;
}

const getAllProjects = async () => {
  const projectsQuery: {projects: ProjectType[]} = await graphcms.request(gql`
    query GetAllProjects($stage: Stage!) {
      projects(stage: $stage) {
        title
        description
        featuredImage {
          url
        }
        role
        techStack
        slug
      }
    }
  `, {
    stage: 'PUBLISHED'
  });

  const { projects } = projectsQuery;

  return projects;
};

export { getAllProjects };
