import React from 'react';
import { NavLink } from '../atoms/nav-link';

interface ProjectTileProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export const ProjectTile: React.FC<ProjectTileProps> = ({
  title,
  description,
  imageUrl,
  slug,
}: ProjectTileProps) => {
  return (
    <div className="project-tile">
      <NavLink href={`/work/${slug}`}>
        <div
          className="project-tile-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </NavLink>
      <div className="project-tile-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
