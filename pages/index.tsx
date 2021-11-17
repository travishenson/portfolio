import React from 'react';
import { NextPage } from 'next';

import Layout from '../components/layout';

// Home page blocks
import { FirstHomeBlock, SecondHomeBlock } from '../components/molecules/home';

const Index: NextPage = () => {
  return (
    <Layout pageTitle="Home">
      <FirstHomeBlock />
      <SecondHomeBlock />
    </Layout>
  );
};

export default Index;
