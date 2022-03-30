import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {IconProps} from '.';

const LinkedinIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
}: IconProps) => (
  <a
    href="https://linkedin.com/in/travisghenson"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin style={{width: width, height: height, color: color}} />
  </a>
);

export default LinkedinIcon;
