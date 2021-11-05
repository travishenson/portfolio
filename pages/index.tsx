import React from 'react';
import { NextPage } from 'next';

import Layout from '../components/layout';

// Home page blocks
import { FirstHomeBlock } from '../components/molecules/home/first-block';

const Index: NextPage = () => (
  <Layout pageTitle="Home">
    <FirstHomeBlock />
  </Layout>
);

export default Index;
