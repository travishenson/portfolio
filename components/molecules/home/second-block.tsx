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
        <h3>Featured Projects</h3>
        
        {featuredProjects.map((project: ProjectType, index: number) => (
          <div key={index}>{project.title}</div>
        ))}
      </div>
    </section>
  );
};

export {SecondHomeBlock};
