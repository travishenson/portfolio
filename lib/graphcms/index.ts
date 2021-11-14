import { GraphQLClient } from 'graphql-request';

// Setting up GraphCMS Connection
export const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${process.env.GRAPHCMS_AUTH_TOKEN!}`,
  },
});