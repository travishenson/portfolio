import React from 'react';
import {AiFillInstagram} from 'react-icons/ai';
import {IconProps} from '.';

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
    <AiFillInstagram style={{width: width, height: height, color: color}} />
  </a>
);

export default InstagramIcon;
