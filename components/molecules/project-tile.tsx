import React from 'react';
import Image from 'next/image';
import {isMobile} from 'react-device-detect';

import {NavLink} from '../atoms/nav-link';
import {Button} from '../atoms/button';

export interface ProjectTileProps {
  title: string;
  overview: string;
  imageUrl: string;
  techStack: string[];
  tileBgColorHex: string;
  homePage?: boolean;
  slug: string;
  index: number;
}

export const ProjectTile: React.FC<ProjectTileProps> = ({
  title,
  overview,
  imageUrl,
  techStack,
  tileBgColorHex,
  homePage,
  slug,
  index,
}: ProjectTileProps) => {
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
      className="project-tile"
      style={{
        backgroundColor: tileBgColorHex,
        padding: homePage ? '100px 0' : '0',
      }}
    >
      <div
        className={`project-tile-inner  ${
          index % 2 === 0 && !isMobile
            ? 'project-tile-left'
            : 'project-tile-right'
        }`}
      >
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
          <p className="project-overview">{overview}</p>
          <p className="project-tech">
            {techStack.map(
              (tech, index) =>
                `${tech} ${index !== techStack.length - 1 ? '/' : ''} `
            )}
          </p>
          <div className="project-button">
            <NavLink href={`/projects/${slug}`}>
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
