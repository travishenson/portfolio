import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {Helmet} from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import Markdown from 'markdown-to-jsx';

import Layout from '../../components/layout';
import {parseProjectDates} from '../../shared/utils';

const HeaderData: React.FC<{label: string; value: string}> = ({
  label,
  value,
}) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-brand-grey-300 uppercase">{label}</span>
      <span className="font-outfit text-[1.44rem] md:text-[1.777rem] -mt-2">
        {value}
      </span>
    </div>
  );
};
const ProjectPage = (props: PageProps<Queries.ProjectPageQuery>) => {
  const project = {...props.data.graphCmsProject};

  const projectDates = parseProjectDates(project.startDate, project.finishDate);

  console.log(project.content)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{project.title} | Travis Henson</title>
        <link rel="canonical" href="https://travishenson.com" />
      </Helmet>
      <Layout path={props.path} isFullWidth>
        <div className="w-full h-[55vh] bg-brand-black text-brand-grey-100 px-8">
          <div className="flex w-full h-full max-w-content mx-auto justify-center items-center">
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 w-full max-w-text mx-auto">
              <HeaderData label="Project" value={String(project.title)} />
              <HeaderData
                label="Duration"
                value={String(`${projectDates.start} – ${projectDates.finish}`)}
              />
              <HeaderData label="Role" value={String(project.role)} />
              <HeaderData label="Type" value={String(project.projectType)} />
            </div>
          </div>
        </div>
        <div className="w-full max-w-content mx-auto border">
          <div className="max-w-text mx-auto px-8">
            <Markdown>{project.pageContent ?? ''}</Markdown>
            {/* <ReactMarkdown
              components={{
                p({node, className, children, ...props}) {
                  console.log(node);

                  if (node.children[0].type === 'element') {
                    console.log(node.children[0]);
                    if (node.children[0].tagName === 'img') {
                      const {properties} = node.children[0];

                      return <img src={properties?.src ?? ''} />;
                    }
                  }

                  return (
                    <p
                      className="mt-8"
                      children={String(children).replace(/\n$/, '')}
                      {...props}
                    />
                  );
                },
                img({children}) {
                  console.log(children);
                  return <div>img</div>;
                },
              }}
            >
              {project.pageContent as string}
            </ReactMarkdown> */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ProjectPage($slug: String!) {
    graphCmsProject(slug: {eq: $slug}) {
      content {
        raw
      }
      description
      featuredImage {
        url
      }
      finishDate
      liveProjectUrl
      overview
      pageContent
      projectType
      role
      slug
      startDate
      techStack
      title
    }
  }
`;

export default ProjectPage;
