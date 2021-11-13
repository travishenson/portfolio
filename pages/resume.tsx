import React from 'react';
import { NextPage } from 'next';

import Layout from '../components/layout';
import { PageTitle } from '../components/atoms/page-title';

const Resume: NextPage = () => (
  <Layout pageTitle="Resume">
    <PageTitle title="Resume" />
  </Layout>
);

export default Resume;
