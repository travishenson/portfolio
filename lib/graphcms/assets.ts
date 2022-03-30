import {gql} from 'graphql-request';
import {graphcms} from '.';

type ImageAsset = {
  id: string;
  url: string;
};

const getPortraitImage = async () => {
  const portraitImageQuery: { asset: ImageAsset } = await graphcms.request(
    gql`
      {
        asset(where: { id: "ckw9x2loourij0c78l43f7pkr" }) {
          id
          url
        }
      }
    `
  );

  const {url} = portraitImageQuery.asset;

  return url;
};

export {getPortraitImage};
