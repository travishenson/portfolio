import { GraphQLClient } from 'graphql-request';

// Setting up GraphCMS Connection
const dev = process.env.NODE_ENV !== 'production';

export const graphcms = new GraphQLClient(dev ? 'http://localhost:3000' : process.env.GRAPHCMS_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${process.env.GRAPHCMS_AUTH_TOKEN!}`,
  },
});