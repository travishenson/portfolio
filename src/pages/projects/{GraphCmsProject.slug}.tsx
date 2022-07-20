import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {GatsbyImage, getImage, IGatsbyImageData} from 'gatsby-plugin-image';
import {Helmet} from 'react-helmet';
import {RichText} from '@graphcms/rich-text-react-renderer';
import {RichTextContent} from '@graphcms/rich-text-types';

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
  const projectImages: (IGatsbyImageData & {altText: string; slug: string})[] =
    project.projectImages
      ? project?.projectImages.map((image: any) => {
          const gatsbyImage = getImage(image) as IGatsbyImageData;

          return {
            ...gatsbyImage,
            slug: image.slug,
            altText: image.altText,
          };
        })
      : [];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{project.title} | Travis Henson</title>
        <link
          rel="canonical"
          href={`https://travishenson.com/projects/${project.slug}`}
        />
      </Helmet>
      <Layout path={props.path} isFullWidth>
        <div className="w-full h-auto min-h-[35vh] bg-brand-black text-brand-grey-100 px-8 ">
          <div className="flex w-full h-full max-w-content mx-auto pt-[10vh] sm:pt-[15vh] pb-[5vh] sm:pb-0">
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
        <div className="max-w-content mx-auto pt-8 md:pt-12 px-4">
          <RichText
            content={project?.content?.raw as RichTextContent}
            renderers={{
              h4: ({children}) => (
                <div className="text-lg max-w-text mx-auto md:mt-12">
                  <h2>{children}</h2>
                </div>
              ),
              p: ({children}) => (
                <p className="mx-auto mt-4 text-lg">{children}</p>
              ),
              class: ({children, className}) => {
                if (className === 'section-break') {
                  return <div className=" h-12" />;
                }

                const imageIdx = projectImages.findIndex(
                  (image) => image.slug === className
                );

                return (
                  <div className="flex justify-center">
                    <GatsbyImage
                      image={projectImages[imageIdx]}
                      alt={projectImages[imageIdx].altText}
                      className="w-full max-w-screen-lg"
                    />
                  </div>
                );
              },
            }}
          />
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
      projectImages {
        altText
        gatsbyImageData(width: 1500, layout: CONSTRAINED, placeholder: BLURRED)
        slug
      }
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
