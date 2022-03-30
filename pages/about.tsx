import {NextPage, GetStaticProps, InferGetStaticPropsType} from 'next';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/layout';
import {getPageContent} from '../lib/graphcms/pageContent';

const About: NextPage = ({
  pageContent,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout pageTitle="About Me">
      <main className="about-main">
        <div>
          <ReactMarkdown>{pageContent.content}</ReactMarkdown>
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageContent = await getPageContent('about');

  return {
    props: {
      pageContent,
    },
  };
};

export default About;
