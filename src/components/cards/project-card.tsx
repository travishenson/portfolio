import React from 'react';
import {GatsbyImage, getImage, IGatsbyImageData} from 'gatsby-plugin-image';
import {Link} from 'gatsby';
import {ArrowNarrowRightIcon} from '@heroicons/react/outline';

export interface ProjectCardProps {
  index: number;
  image: any;
  overview: string;
  role: string | null;
  slug: string;
  title: string;
  type: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  image,
  overview,
  role,
  slug,
  title,
  type,
}) => {
  const projectImage = getImage(image) as IGatsbyImageData;
  const isImageLeft = index % 2 === 0;

  const imageLeftStyles = {
    card: 'rounded-b-lg md:rounded-bl-none md:rounded-r-lg',
    image: 'rounded-t-lg md:rounded-tr-none md:rounded-l-lg',
  };

  const imageRightStyles = {
    card: 'rounded-b-lg md:rounded-br-none md:rounded-l-lg',
    image: 'w-full rounded-t-lg md:rounded-tl-none md:rounded-r-lg ',
  };

  return (
    <div
      className={`flex flex-col md:flex-row w-full max-w-screen-lg mx-auto h-full md:h-[425px] shadow-lg shadow-brand-black justify-start text-brand-grey-900 ${
        isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <Link to={`/projects/${slug}`} className="w-full h-full md:w-3/5">
        <div
          className={`w-full h-full overflow-hidden ${
            isImageLeft ? imageLeftStyles.image : imageRightStyles.image
          }`}
        >
          <GatsbyImage
            image={projectImage}
            alt={`${title} featured mockup`}
            className={`w-full h-full object-cover hover:scale-110 transition-all duration-500 ${
              isImageLeft ? imageLeftStyles.image : imageRightStyles.image
            }`}
          />
        </div>
      </Link>
      <div
        className={`bg-brand-grey-100 flex flex-col h-full justify-center w-full md:w-2/5 p-8 ${
          isImageLeft ? imageLeftStyles.card : imageRightStyles.card
        }`}
      >
        <span className="flex flex-row text-sm italic text-brand-grey-700">
          {type} &mdash; {role}
        </span>
        <div className="flex flex-col gap-1 mt-5 mb-4">
          <Link
            to={`/projects/${slug}`}
            className="max-w-max hover:text-brand-blue-500"
          >
            <p className="font-outfit text-2xl md:text-4xl">{title}</p>
          </Link>
          <span>{overview}</span>
        </div>
        <Link
          to={`/projects/${slug}`}
          className="group flex h-8 items-center mt-4 max-w-max hover:cursor-pointer hover:text-brand-blue-500"
        >
          <div className="h-full font-outfit text-base flex items-center">
            View Project
          </div>
          <ArrowNarrowRightIcon className="h-6 mt-0.5 ml-0.5 group-hover:translate-x-1 transition-transform duration-500" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
