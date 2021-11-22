import { gql } from 'graphql-request';
import { graphcms } from '.';

type ImageAsset = {
  id: string;
  url: string;
};

const getPortraitImage = async () => {
  const portraitImageQuery: { asset: ImageAsset } = await graphcms.request(
    gql`
      {
        asset(where: { id: "ckw9ufgj4hiao0a70dpku99bp" }) {
          id
          url
        }
      }
    `
  );

  const { url } = portraitImageQuery.asset;

  return url;
};

export { getPortraitImage };
