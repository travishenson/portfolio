import React from 'react';
import { NextPage } from 'next';

import Layout from '../../components/layout';
import { PageTitle } from '../../components/atoms/page-title';

const Work: NextPage = () => {
  return (
    <Layout pageTitle="Work">
      <PageTitle title="Work" />
    </Layout>
  );
};

export default Work;
