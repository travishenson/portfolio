import React from 'react';
import {Link} from 'gatsby';
import {GatsbyImage, getImage, IGatsbyImageData} from 'gatsby-plugin-image';
import {ArrowNarrowRightIcon} from '@heroicons/react/outline';

export interface BlogCardProps {
  image: any;
  overview: string;
  publishedAt: string;
  slug: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  overview,
  publishedAt,
  slug,
  title,
}) => {
  const blogImage = getImage(image) as IGatsbyImageData;

  return (
    <div className="w-full h-[450px] mt-6 overflow-hidden">
      <div className="w-full h-full flex flex-col">
        <Link to={`/blog/${slug}`} className="w-full h-1/2">
          <GatsbyImage
            image={blogImage}
            alt={`${title} featured mockup`}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </Link>
        <div className="flex flex-col flex-1 text-brand-black p-4 bg-brand-grey-100 rounded-b-lg">
          <p className="text-sm font-outfit text-brand-grey-700">
            Published {publishedAt}
          </p>
          <div className="flex flex-1 flex-col justify-between">
            <Link
              to={`/blog/${slug}`}
              className="max-w-max hover:text-brand-blue-500 line-clamp-3"
            >
              <h3>{title}</h3>
            </Link>
            <p className="flex-1 line-clamp-4">{overview}</p>

            <Link
              to={`/blog/${slug}`}
              className="group flex h-8 items-center mt-4 max-w-max hover:cursor-pointer hover:text-brand-blue-500"
            >
              <div className="h-full font-outfit text-base flex items-center">
                View Post
              </div>
              <ArrowNarrowRightIcon className="h-6 mt-0.5 ml-0.5 group-hover:translate-x-1 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
