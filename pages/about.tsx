import React from 'react';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/dist/client/image';

import Layout from '../components/layout';
import { PageTitle } from '../components/atoms/page-title';
import { getPortraitImage } from '../lib/graphcms/assets';

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

      <main className="about-text">
        <h4>
          I&apos;m Travis Henson, a JavaScript developer currently based in
          Kentucky.
        </h4>
        <p>
          As a full-stack developer with a passion for creating clean and
          easy-to-use applications, I place an emphasis on user experience and
          usability. What motivates me is the ongoing challenge of finding
          elegant, code-based solutions to users&apos; and businesses&apos;
          complex problems.
        </p>
        <p>
          As a child of the internet, I have seen computers go from the hefty
          Gateway desktops with dial-up connections to the thin, sleek MacBook
          Air I work on today. The innovations within the the field of
          technology and computers have always fascinated me.
        </p>
        <p>
          Being a web developer allows me to contribute to that and grow along
          with it. That opportunity to learn and grow is what consistently keeps
          me interested and drives me to keep up with the everchanging landscape
          of the internet.
        </p>
        <p>
          Outside of web development, a few of my main interests are sports,
          horror movies, video games, and photography. So, in my spare time,
          I&apos;m just as likely to be watching the latest Mike Flanagan
          thriller as I am to be cheering on my beloved Chelsea FC.
        </p>
      </main>
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
