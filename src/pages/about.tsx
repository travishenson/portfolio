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
        <span className="text-xs text-brand-grey-300 uppercase">{label}</span>
        <ul className="grid sm:grid-cols-2 gap-4 mt-2">
          {techList.map((tech) => textToIcon(tech))}
        </ul>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <span className="text-xs text-brand-grey-300 uppercase">{label}</span>
      <span className="font-outfit text-md md:text-md">{value}</span>
    </div>
  );
};

const AboutPage = ({path, data}: PageProps<Queries.AboutPageQuery>) => {
  const sectionHeaderStyle = 'text-xl md:text-4xl max-w-lg mb-8';
  const pStyles = 'max-w-text my-8';

  const profileImage = getImage(data.graphCmsAsset as any) as IGatsbyImageData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me | Travis Henson</title>
        <link rel="canonical" href="https://travishenson.com/about" />
      </Helmet>
      <Layout path={path}>
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          <div className="flex-1 pt-8">
            <div className="w-full max-w-text mx-auto">
              <div className="">
                <h1 className={sectionHeaderStyle}>
                  Travis Henson, a JavaScript developer currently based in
                  Kentucky.
                </h1>
              </div>
              <p className={pStyles}>
                As a full-stack developer with a passion for creating clean and
                easy-to-use applications, I place an emphasis on user experience
                and usability. What motivates me is the ongoing challenge of
                finding elegant, code-based solutions to users’ and businesses’
                complex problems.
              </p>
              <p className={pStyles}>
                Being a web developer allows me to do that on a daily basis.
                That opportunity to learn and grow is what consistently keeps me
                interested and drives me to keep up with the ever-changing
                landscape of the internet and web development.
              </p>
              <div className="max-w-text mx-auto">
                <h2 className={sectionHeaderStyle}>Experience</h2>
              </div>
              <div className="max-w-text mx-auto">
                <h2 className={sectionHeaderStyle}>Education</h2>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto max-w-[350px] sm:max-w-[700px] lg:max-w-[350px] pb-8 sm:pb-0 lg:pb-8 min-h-min sm:max-h-[350px] lg:max-h-max bg-brand-black rounded-xl drop-shadow-xl">
            <div className="w-full mx-auto flex flex-col sm:flex-row lg:flex-col">
              <GatsbyImage
                image={profileImage}
                alt={data.graphCmsAsset?.altText as string}
                className="mb-4 sm:mb-0 lg:mb-4 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none lg:rounded-t-xl lg:rounded-bl-none w-full max-w-[350px] sm:max-w-[250px] md:max-w-[350px] h-[350px]"
              />
              <div className="flex flex-col gap-6 max-w-text p-6 justify-center">
                <BioData label="Name" value="Travis Henson" />
                <BioData label="Position" value="Web Engineer @ Getter" />
                <BioData label="Technology" value="" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query AboutPage {
    graphCmsAsset(id: {eq: "Asset:ckw9x2loourij0c78l43f7pkr:en:PUBLISHED"}) {
      id
      altText
      gatsbyImageData(width: 350, placeholder: BLURRED, layout: CONSTRAINED)
      slug
    }
  }
`;

export default AboutPage;
