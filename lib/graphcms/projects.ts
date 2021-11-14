import { graphcms } from '.';

const getAllProjects = async () => {
  const data = await graphcms.request(`
    query GetAllProjects($stage: Stage!) {
      projects(stage: $stage) {
        title
        description
        featuredImage {
          url
        }
        role
        techStack
      }
    }
  `, {
    stage: 'PUBLISHED'
  });

  return data;
};

export { getAllProjects };
