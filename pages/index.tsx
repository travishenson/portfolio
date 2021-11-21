import React from 'react';
import { NextPage } from 'next';

import Layout from '../components/layout';

// Home page blocks
import { FirstHomeBlock } from '../components/molecules/home';

const Index: NextPage = () => {
  return (
    <Layout pageTitle="Home">
      <FirstHomeBlock />
    </Layout>
  );
};

export default Index;
