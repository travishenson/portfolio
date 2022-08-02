import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {GatsbyImage, getImage, IGatsbyImageData} from 'gatsby-plugin-image';
import {Helmet} from 'react-helmet';

import Layout from '../components/layout';
import {textToIcon} from '../shared/utils';

const techList: string[] = [
  'TypeScript',
  'React',
  'GraphQL',
  'Tailwind',
  'Gatsby',
  'Supabase',
];

const BioData: React.FC<{label: string; value: any}> = ({label, value}) => {
  if (label === 'Technology') {
    return (
      <div className="flex flex-col">
        <span className="text-xs text-brand-grey-300 uppercase font-outfit">
          {label}
        </span>
        <ul className="grid sm:grid-cols-2 gap-4 mt-3">
          {techList.map((tech) => textToIcon(tech))}
        </ul>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <span className="text-xs text-brand-grey-300 uppercase font-outfit">
        {label}
      </span>
      <span className="font-outfit text-md md:text-md">{value}</span>
    </div>
  );
};

const AboutPage = ({path, data}: PageProps<Queries.AboutPageQuery>) => {
  const sectionStyle = 'w-full max-w-text mx-auto mb-8';
  const sectionHeaderStyle = 'text-xl md:text-4xl max-w-lg mb-4';
  const pStyles = 'mb-8';

  const profileImage = getImage(data.graphCmsAsset as any) as IGatsbyImageData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me | Travis Henson</title>
        <link rel="canonical" href="https://travishenson.com/about" />
      </Helmet>
      <Layout path={path}>
        <div className="flex flex-col-reverse lg:flex-row gap-16">
          <div className="flex flex-col w-full md:w-3/5 pt-4">
            <section className={sectionStyle}>
              <h1 className={sectionHeaderStyle}>
                JavaScript developer focused on creating clean and easy-to-use
                sites and applications.
              </h1>
              <p className={pStyles}>
                As a full-stack developer, I place an emphasis on user
                experience and usability. What motivates me is the ongoing
                challenge of finding elegant, code-based solutions to users’ and
                businesses’ complex problems.
              </p>
              <p className={pStyles}>
                Being a web developer allows me to do that on a daily basis.
                That opportunity to learn and grow is what consistently keeps me
                interested and drives me to keep up with the ever-changing
                landscape of the internet and web development.
              </p>
              <p className={pStyles}>
                When I'm not coding at my computer, my main interests are video
                games, sports, and various forms of horror media (mainly movies
                and shows). I definitely have a weird fascination for cryptids
                and the paranormal as well.
              </p>
            </section>
            <section className={sectionStyle}>
              <h2 className={sectionHeaderStyle}>Experience</h2>
              <div
                className={`${pStyles}  border-l-2 border-brand-blue-500 ml-2 pl-4`}
              >
                <h3 className="font-outfit text-lg mb-1">
                  Web Engineer &mdash; Getter
                </h3>
                <p className="text-sm italic text-gray-300">
                  April 2021 &ndash; Present
                </p>
              </div>
              <div
                className={`${pStyles} border-l-2 border-brand-blue-500 ml-2 pl-4`}
              >
                <h3 className="font-outfit text-lg mb-1">
                  Game Template Developer &mdash; Koji
                </h3>
                <p className="text-sm italic text-gray-300">
                  February 2020 &ndash; June 2020
                </p>
              </div>
            </section>
            <section className={sectionStyle}>
              <h2 className={sectionHeaderStyle}>Education</h2>
              <div
                className={`${pStyles}  border-l-2 border-brand-blue-500 ml-2 pl-4`}
              >
                <h3 className="font-outfit text-lg mb-1">
                  Certificate &mdash; Full Stack Web Development
                </h3>
                <p className="text-sm italic text-gray-300">
                  University of Richmond | Richmond, VA, USA
                </p>
                <p className="text-sm italic text-gray-300">
                  February 2019 &ndash; June 2019
                </p>
              </div>
              <div
                className={`${pStyles}  border-l-2 border-brand-blue-500 ml-2 pl-4`}
              >
                <h3 className="font-outfit text-lg mb-1">
                  Bachelor of Arts &mdash; Advertising
                </h3>
                <p className="text-sm italic text-gray-300">
                  Western Kentucky University | Bowling Green, KY, USA
                </p>
                <p className="text-sm italic text-gray-300">
                  August 2014 &ndash; May 2017
                </p>
              </div>
            </section>
          </div>

          <div className="w-full max-w-[400px] min-h-[200px] mx-auto drop-shadow-xl">
            <GatsbyImage
              image={profileImage}
              alt={data.graphCmsAsset?.altText as string}
              loading="eager"
              className="w-full rounded-t-xl"
            />
            <div className="bg-brand-black flex flex-col gap-6 max-w-text p-8 justify-center rounded-b-xl">
              <BioData label="Name" value="Travis Henson" />
              <BioData label="Position" value="Web Engineer &mdash; Getter" />
              <BioData label="Technology" value="" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query AboutPage {
    graphCmsAsset(id: {eq: "Asset:cl67hxpddocys0cmtbqzo20b1:en:PUBLISHED"}) {
      id
      altText
      gatsbyImageData(width: 500, placeholder: BLURRED, layout: CONSTRAINED)
      slug
    }
  }
`;

export default AboutPage;
