import { GraphQLClient, gql } from 'graphql-request';

// Setting up GraphCMS Connection
export const gqlClient = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${process.env.GRAPHCMS_AUTH_TOKEN!}`,
  },
});

// GraphQL generic function
async function graphql(query: string) {
  const data = await gqlClient.request(query);

  return data.projects;
}

// GRAPHCMS QUERIES //

export async function getAllProjects() {
  const data = graphql(gql`
    {
      projects {
        title
        description
      }
    }
  `);

  return data;
}
