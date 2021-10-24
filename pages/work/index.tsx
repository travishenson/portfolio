import React from 'react';
import { NextPage } from 'next';
import { getAllProjects } from '../../lib/graphcms';

import Layout from '../../components/layout';

const Work: NextPage = (props: any) => (
  <Layout pageTitle="Work">
    <div>
      There are going to be {props.projects.length} projects on this Work page.
    </div>
  </Layout>
);

Work.getInitialProps = async () => {
  const projects = await getAllProjects();
  return { projects };
};

export default Work;
