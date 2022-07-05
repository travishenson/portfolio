import React from 'react';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

export interface BlogCardProps {
  image: any;
  overview: string;
  slug: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  overview,
  slug,
  title,
}) => {
  return (
    <div>
      <div>
        <div>
          <GatsbyImage image={image} alt={`${title} featured mockup`} />
        </div>
        <div>
          <a href={`/blog/${slug}`}>
            <h3>{title}</h3>
          </a>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
