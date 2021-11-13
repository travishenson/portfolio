import React from 'react';
import { NextPage } from 'next';

import Layout from '../components/layout';
import { PageTitle } from '../components/atoms/page-title';

const Contact: NextPage = () => (
  <Layout pageTitle="Contact">
    <PageTitle title="Contact" />
  </Layout>
);

export default Contact;
