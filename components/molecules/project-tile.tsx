import React from 'react';
// import Link from 'next/link';
import Image from 'next/image';

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
  // slug,
}: ProjectTileProps) => {
  return (
    // <Link href={`/work/${slug}`} passHref>
    <div className="project-tile">
      <div className="project-tile-inner">
        <div className="project-cover-image">
          <Image
            src={imageUrl}
            alt={`${title} project cover image`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
    // </Link>
  );
};
