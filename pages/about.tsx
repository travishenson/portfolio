import React from 'react';
import { NextPage } from 'next';

import Layout from '../components/layout';
import { PageTitle } from '../components/atoms/page-title';

import LoremIpsum from '../components/atoms/lorem-ipsum';

const About: NextPage = () => (
  <Layout pageTitle="About Me">
    <PageTitle title="About Me" />
    <LoremIpsum />
  </Layout>
);

export default About;
