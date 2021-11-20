import React from 'react';

interface ProjectTileProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  index: number;
}

export const ProjectTile: React.FC<ProjectTileProps> = ({
  title,
  description,
  imageUrl,
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
        style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: backgroundPosition() }}
      />
      <div className="project-tile-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
