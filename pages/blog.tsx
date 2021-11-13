import React from 'react';
import { NextPage } from 'next';

import Layout from '../components/layout';
import { PageTitle } from '../components/atoms/page-title';

const Blog: NextPage = () => (
  <Layout pageTitle="Blog">
    <PageTitle title="Blog" />
    <p>How did you get here? The blog link isn&apos;t even up yet!</p>
  </Layout>
);

export default Blog;
