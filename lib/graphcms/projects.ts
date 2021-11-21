import { gql } from 'graphql-request';
import { graphcms } from '.';

type FeaturedImage = {
  url: string;
};

type TileBgColor = {
  hex: string;
}

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  featuredImage: FeaturedImage;
  role: string;
  techStack: string[];
  tileBgColor: TileBgColor;
  slug: string;
};

const getAllProjects = async () => {
  const projectsQuery: { projects: ProjectType[] } = await graphcms.request(
    gql`
      query GetAllProjects($stage: Stage!) {
        projects(stage: $stage, orderBy: sortOrder_ASC) {
          title
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

const getProject = async (slug: any) => {
  console.log(slug);
  const projectQuery: { project: ProjectType } = await graphcms.request(
    gql`
      {
        project(where: {slug: "${slug}"}) {
          id
          featuredImage {
            url
          }
          pageContent
          role
          techStack
          title
        }
      }
  `);

  const { project } = projectQuery;

  return project;
};

export { getAllProjects, getProject };
