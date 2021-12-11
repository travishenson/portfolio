import React from 'react';
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import dayjs from 'dayjs';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/layout';
import {getProject} from '../../lib/graphcms/projects';

const Project: NextPage = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    client,
    description,
    liveProjectUrl,
    pageContent,
    startDate,
    finishDate,
    role,
    techStack,
    title,
  } = project;

  return (
    <Layout pageTitle={title}>
      <div className="project-info">
        <p>Client: {client}</p>
        <p>{liveProjectUrl}</p>
        <p>
          {dayjs(startDate).format('MMMM YYYY')} &ndash;{' '}
          {finishDate ? dayjs(finishDate).format('MMMM YYYY') : 'Present'}
        </p>
        <p>{role}</p>
        <p>
          {techStack.map((tech: string) => (
            <span style={{marginRight: '1rem'}} key={tech}>
              {tech}
            </span>
          ))}
        </p>
        <p>{description}</p>
        <ReactMarkdown className="project-content">{pageContent}</ReactMarkdown>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const projectName = context.params?.projectName as string;
  const project = await getProject(projectName);

  return {
    props: {
      project,
    },
  };
};

export default Project;
