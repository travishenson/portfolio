import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { IconProps } from '.';

const InstagramIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
}: IconProps) => (
  <a
    href="https://instagram.com/travishenson.js"
    target="_blank"
    rel="noreferrer"
  >
    <FaInstagram style={{ width: width, height: height, color: color }} />
  </a>
);

export default InstagramIcon;
