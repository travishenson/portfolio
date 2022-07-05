import React from 'react';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

export interface ProjectCardProps {
  image: any;
  liveProjectUrl: string;
  overview: string;
  slug: string;
  techStack: readonly string[];
  title: string;
  homePage?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  liveProjectUrl,
  overview,
  slug,
  techStack,
  title,
  homePage,
}) => {
  return (
    <div>
      <div>
        <div>
          <GatsbyImage image={image} alt={`${title} featured mockup`} />
        </div>
        <div>
          <a href={`/projects/${slug}`}>
            <h3>{title}</h3>
          </a>
          <p>{overview}</p>
          <p>
            {techStack.map(
              (tech, index) =>
                `${tech} ${index !== techStack.length - 1 ? '/' : ''} `
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
