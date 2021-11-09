import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { IconProps } from '.';

const TwitterIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
}: IconProps) => (
  <a href="https://twitter.com/travishenson" target="_blank" rel="noreferrer">
    <FaTwitter style={{ width: width, height: height, color: color }} />
  </a>
);

export default TwitterIcon;
