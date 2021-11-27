import { gql } from 'graphql-request';
import { graphcms } from '.';

type FeaturedImage = {
  url: string;
};

type TileBgColor = {
  hex: string;
};

export type ProjectType = {
  id: number;
  title: string;
  overview: string;
  description: string;
  featuredImage: FeaturedImage;
  role: string;
  techStack: string[];
  tileBgColor: TileBgColor;
  slug: string;
};

const getProjects = async (isFeatured?: boolean) => {
  const featuredQuery = isFeatured
    ? 'where: {featuredProject: true},'
    : '';

  const projectsQuery: { projects: ProjectType[] } = await graphcms.request(
    gql`
      query GetAllProjects($stage: Stage!) {
        projects(
          ${featuredQuery}
          stage: $stage
          orderBy: sortOrder_ASC
        ) {
          title
          overview
          description
          featuredImage {
            url
          }
          role
          techStack
          tileBgColor {
            hex
          }
          slug
        }
      }
    `,
    {
      stage: 'PUBLISHED',
    }
  );

  const { projects } = projectsQuery;

  return projects;
};

const getProject = async (slug: string | undefined) => {
  if (!slug) return null;

  const projectQuery: { project: ProjectType } = await graphcms.request(
    gql`
      {
        project(where: {slug: "${slug}"}) {
          id
          featuredImage {
            url
          }
          client
          liveProjectUrl
          startDate
          finishDate
          description
          pageContent
          role
          techStack
          title
        }
      }
  `
  );

  const { project } = projectQuery;

  return project;
};

export { getProjects, getProject };
