import React from 'react';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/dist/client/image';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/layout';
import { PageTitle } from '../components/atoms/page-title';
import { getPortraitImage } from '../lib/graphcms/assets';
import { getPageContent } from '../lib/graphcms/pageContent';

const About: NextPage = ({
  portraitImage,
  pageContent,
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

      <main className="about-text">
        <ReactMarkdown>{pageContent.content}</ReactMarkdown>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const portraitImage = await getPortraitImage();
  const pageContent = await getPageContent('about');

  return {
    props: {
      portraitImage,
      pageContent,
    },
  };
};

export default About;
