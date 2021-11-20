import React from 'react';
import { NavLink } from '../atoms/nav-link';
import { Button } from '../atoms/button';

interface ProjectTileProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  slug: string;
  index: number;
}

export const ProjectTile: React.FC<ProjectTileProps> = ({
  title,
  description,
  imageUrl,
  techStack,
  slug,
  index,
}: ProjectTileProps) => {
  const backgroundPosition = () => {
    switch (slug) {
      case 'pirates-plunder':
        return 'bottom center';
      default:
        return 'top center';
    }
  };

  return (
    <div
      className={`project-tile ${
        index % 2 === 0 ? 'project-tile-left' : 'project-tile-right'
      }`}
    >
      <div
        className="project-tile-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: backgroundPosition(),
        }}
      />
      <div className="project-tile-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          {techStack.map(
            (tech, index) =>
              `${tech} ${index !== techStack.length - 1 ? '/' : ''} `
          )}
        </p>
        <div className="project-button">
          <NavLink href={`/work/${slug}`}>
            <Button variant="primary" size="md">
              View Project
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
