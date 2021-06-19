import React from 'react';
import {NextPage} from 'next';
import { getAllProjects } from '../../lib/graphcms';

const Portfolio: NextPage = (props: any) => {
  return (
    <div>
      There are going to be {props.projects.length} projects on this page.
    </div>
  )
}

Portfolio.getInitialProps = async () => {
  const projects = await getAllProjects();
  return { projects } ;
};

export default Portfolio;