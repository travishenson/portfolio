import React from 'react';
import Image from 'next/image';

import { NavLink } from '../atoms/nav-link';
import { Button } from '../atoms/button';

import { useScreenSize } from '../../hooks/use-screen-size';

export interface ProjectTileProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  tileBgColorHex: string;
  homePage?: boolean;
  slug: string;
  index: number;
}

export const ProjectTile: React.FC<ProjectTileProps> = ({
  title,
  description,
  imageUrl,
  techStack,
  tileBgColorHex,
  homePage,
  slug,
  index,
}: ProjectTileProps) => {
  const { isMobile } = useScreenSize();

  let tileTextColor;

  switch (slug) {
    case 'getter':
      tileTextColor = 'tile-light-text';
      break;
    default:
      tileTextColor = 'tile-dark-text';
  }

  return (
    <div
      className={`project-tile ${
        index % 2 === 0 && !isMobile
          ? 'project-tile-left'
          : 'project-tile-right'
      }`}
      style={{ backgroundColor: tileBgColorHex, padding: homePage ? '100px 0' : '0' }}
    >
      <div className="project-tile-inner">
        <div className="project-image">
          <Image
            src={imageUrl}
            layout="responsive"
            width="100%"
            height={isMobile ? '65%' : '70%'}
            objectFit="contain"
            alt={`${title} featured image mockup`}
          />
        </div>
        <div className={`project-text ${tileTextColor}`}>
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
          <p className="project-tech">
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
    </div>
  );
};
