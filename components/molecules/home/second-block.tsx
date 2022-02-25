import React from 'react';

import {ProjectType} from '../../../lib/graphcms/projects';
// import {ProjectTile} from '../project-tile';

interface SecondHomeBlockProps {
  featuredProjects: ProjectType[];
}

const SecondHomeBlock: React.FC<SecondHomeBlockProps> = ({
  featuredProjects,
}: SecondHomeBlockProps) => {
  return (
    <section className="second-home-block">
      <div className="second-block-inner">
        {featuredProjects.map((project: ProjectType, index: number) => (
          <p key={index}>{project.title}</p>
        ))}
      </div>
    </section>
  );
};

export {SecondHomeBlock};
