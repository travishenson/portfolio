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
      <Layout path={path}>
        <Hero>
          <section className="flex flex-1 h-full items-center">
            <div className="flex flex-row flex-wrap w-full justify-between items-center gap-6 px-8">
              <div className="mx-auto">
                <h1 className="mb-6">Hey, I&apos;m Travis.</h1>
                <p className="text-lg md:text-xl font-light">
                  I&apos;m a JavaScript developer who enjoys working across the
                  full stack and has a passion for creating clean and
                  easy-to-use sites and applications.
                </p>
                <p className="text-lg md:text-xl font-light max-w-text">
                  Currently, I'm part of the team that is building and
                  maintaining
                  <a
                    href="https://getter.com.au"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1.5 font-medium tracking-wider underline underline-offset-2 text-brand-grey-100 hover:text-brand-grey-300"
                  >
                    Getter
                  </a>
                  .
                </p>
              </div>
              <div className="w-[450px] mx-auto">
                <StaticImage
                  src="../images/undraw_stars.svg"
                  alt="space illustration with moon and stars"
                  title="'Stars' illustration from undraw.co"
                />
              </div>
            </div>
          </section>
        </Hero>
        <ContentWrapper>
          <section>
            <h3 className="text-center">Featured Projects</h3>
            {featuredProjects.map((project) => {
              const {featuredImage, slug} = project.node;

              return (
                <ProjectCard
                  {...project.node}
                  key={slug}
                  image={featuredImage}
                />
              );
            })}
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
          description
          featuredImage {
            url
          }
          featuredProject
          liveProjectUrl
          overview
          role
          slug
          techStack
          title
        }
      }
    }
  }
`;

export default IndexPage;
