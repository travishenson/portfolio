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
    card: 'flex-row rounded-l-xl rounded-r-lg',
    image: 'rounded-l-lg',
  };
  const imageRightStyles = {
    card: 'flex-row-reverse rounded-r-xl rounded-l-lg',
    image: 'rounded-r-lg',
  };

  return (
    <div
      className={`w-full h-[450px] flex bg-brand-grey-100 shadow-lg shadow-brand-black justify-start text-brand-grey-900 ${
        isImageLeft ? imageLeftStyles.card : imageRightStyles.card
      }`}
    >
      {/* <GatsbyImage
        image={projectImage}
        alt={`${title} featured mockup`}
        className={`w-3/5 object-center ${
          isImageLeft ? imageLeftStyles.image : imageRightStyles.image
        }`}
      /> */}
      <img
        src="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        className={`w-3/5 object-cover ${
          isImageLeft ? imageLeftStyles.image : imageRightStyles.image
        }`}
      />
      <div className="flex flex-col h-full justify-center  w-2/5 p-8">
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
          className="flex gap-1 h-8 items-center mt-4 max-w-max hover:cursor-pointer hover:text-brand-blue-500"
        >
          <div className="h-full font-outfit text-base flex items-center">View Project</div>
          <ArrowNarrowRightIcon className="h-6 mt-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
