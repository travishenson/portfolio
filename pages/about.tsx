import React from 'react';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/dist/client/image';

import Layout from '../components/layout';
import { PageTitle } from '../components/atoms/page-title';
import { getPortraitImage } from '../lib/graphcms/assets';

import LoremIpsum from '../components/atoms/lorem-ipsum';

const About: NextPage = ({
  portraitImage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout pageTitle="About Me">
      <PageTitle title="About Me" />
      <div className="portrait-image-container">
        <Image
          src={portraitImage}
          layout="fill"
          alt="I'm Travis Henson, and this is my face!"
          className="portrait-image"
        />
      </div>
      <LoremIpsum />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const portraitImage = await getPortraitImage();

  return {
    props: {
      portraitImage,
    },
  };
};

export default About;
