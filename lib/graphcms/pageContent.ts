import { gql } from 'graphql-request';
import { graphcms } from '.';

const getPageContent = async (slug: string | undefined) => {
  if (!slug) return null;

  const pageContentQuery: { pageContent: string } = await graphcms.request(
    gql`
      {
        pageContent(where: {pageSlug: "${slug}"}) {
          pageSlug
          content
        }
      }
  `
  );

  const { pageContent } = pageContentQuery;

  return pageContent;
};

export { getPageContent };