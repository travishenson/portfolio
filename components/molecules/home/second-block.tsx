import React from 'react';

import {ProjectType} from '../../../lib/graphcms/projects';
import {ProjectTile} from '../project-tile';

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
        <div className="featured-projects">
          {featuredProjects.map((project: ProjectType) => (
            <ProjectTile
              {...project}
              key={project.slug}
              imageUrl={project.featuredImage.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export {SecondHomeBlock};
