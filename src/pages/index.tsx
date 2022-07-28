import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import {Helmet} from 'react-helmet';

import Layout from '../components/layout';
import Hero from '../components/hero';
import {ContentWrapper} from '../components/wrappers';
import {ProjectCard} from '../components/cards';

const IndexPage = ({path, data}: PageProps<Queries.HomePageQuery>) => {
  const {edges: featuredProjects} = data.featuredProjects;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Travis Henson | JavaScript Developer</title>
        <link rel="canonical" href="https://travishenson.com" />
      </Helmet>
      <Layout path={path} isFullWidth>
        <Hero>
          <section className="flex flex-1 h-full items-center py-[85px]">
            <div className="flex flex-row flex-wrap w-full justify-between items-center gap-6 px-8 mt-8 md:mt-0">
              <div className="mx-auto max-w-text">
                <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl">Hey, I&apos;m Travis.</h1>
                <p className="text-base md:text-md mt-4">
                  I&apos;m a JavaScript developer who enjoys working across the
                  full stack and has a passion for creating clean and
                  easy-to-use sites and applications.
                </p>
                <p className="text-base md:text-md mt-4">
                  Currently, I'm part of the team building and
                  maintaining
                  <a
                    href="https://getter.com.au"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1.5 font-medium underline underline-offset-2 text-brand-grey-100 hover:text-brand-grey-300"
                  >
                    Getter
                  </a>
                  .
                </p>
              </div>
              <div className="w-9/12 md:w-[30vw] lg:w-[30vw] lg:max-w-lg md:min-w-[325px] mt-8 mx-auto">
                <StaticImage
                  src="../images/undraw_stars.svg"
                  alt="space illustration with moon and stars"
                  title="'Stars' illustration from undraw.co"
                  loading="eager"
                />
              </div>
            </div>
          </section>
        </Hero>
        <ContentWrapper>
          <section>
            <h3 className="text-center tracking-wide font-outfit text-2xl md:text-4xl">Featured Projects</h3>
            <div className="flex flex-col mt-12 px-8 gap-16">
              {featuredProjects.map((project, index) => {
                const {featuredImage, projectType, slug} = project.node;

                return (
                  <ProjectCard
                    {...project.node}
                    key={slug}
                    index={index}
                    image={featuredImage}
                    type={projectType}
                  />
                );
              })}
            </div>
          </section>
        </ContentWrapper>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query HomePage {
    featuredProjects: allGraphCmsProject(
      filter: {stage: {eq: PUBLISHED}, featuredProject: {eq: true}}
      sort: {fields: finishDate, order: DESC}
    ) {
      edges {
        node {
          id
          featuredImage {
            gatsbyImageData(width: 1500, layout: CONSTRAINED, placeholder: BLURRED)
          }
          featuredProject
          finishDate
          liveProjectUrl
          overview
          projectType
          role
          slug
          startDate
          techStack
          title
        }
      }
    }
  }
`;

export default IndexPage;
