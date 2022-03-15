import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {isMobile} from 'react-device-detect';

export interface ProjectTileProps {
  title: string;
  overview: string;
  imageUrl: string;
  techStack: string[];
  homePage?: boolean;
  slug: string;
}

export const ProjectTile: React.FC<ProjectTileProps> = ({
  title,
  overview,
  imageUrl,
  techStack,
  slug,
}: ProjectTileProps) => {
  const router = useRouter();

  return (
    <div
      className="project-tile"
      onClick={() => router.push(`/projects/${slug}`)}
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
        <div className="project-text">
          <h3 className="project-title">{title}</h3>
          <p className="project-overview">{overview}</p>
          <p className="project-tech">
            {techStack.map(
              (tech, index) =>
                `${tech} ${index !== techStack.length - 1 ? '/' : ''} `
            )}
          </p>
          {/* <h3 className="project-title">{title}</h3>
          <p className="project-overview">{overview}</p>
          <p className="project-tech">
            {techStack.map(
              (tech, index) =>
                `${tech} ${index !== techStack.length - 1 ? '/' : ''} `
            )}
          </p> */}
        </div>
      </div>
    </div>
  );
};
