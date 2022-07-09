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
    card: 'flex md:flex-row rounded-t-xl rounded-b-xl md:rounded-l-xl md:rounded-r-lg',
    image: 'rounded-t-lg md:rounded-tr-none md:rounded-l-lg',
  };
  const imageRightStyles = {
    card: 'flex md:flex-row-reverse rounded-t-xl rounded-b-xl md:rounded-r-xl md:rounded-l-lg',
    image: 'w-full rounded-t-lg md:rounded-tl-none md:rounded-r-lg ',
  };

  return (
    <div
      className={`w-full h-full md:h-[450px] flex flex-col md:flex-row bg-brand-grey-100 shadow-lg shadow-brand-black justify-start text-brand-grey-900 ${
        isImageLeft ? imageLeftStyles.card : imageRightStyles.card
      }`}
    >
      <Link to={`/projects/${slug}`} className="w-full md:w-3/5">
        <GatsbyImage
          image={projectImage}
          alt={`${title} featured mockup`}
          className={`w-full h-full object-cover ${
            isImageLeft ? imageLeftStyles.image : imageRightStyles.image
          }`}
        />
      </Link>
      <div className="flex flex-col h-full justify-center w-full md:w-2/5 p-8">
        <span className="flex flex-row text-sm italic text-brand-grey-700">
          {type} &mdash; {role}
        </span>
        <div className="flex flex-col gap-1 mt-5 mb-4">
          <Link
            to={`/projects/${slug}`}
            className="max-w-max hover:text-brand-blue-500"
          >
            <h3>{title}</h3>
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
          <ArrowNarrowRightIcon className="h-6 mt-0.5 ml-0.5 group-hover:translate-x-1 transition-all duration-500" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
