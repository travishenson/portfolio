import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {IconProps} from '.';

const GithubIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
}: IconProps) => (
  <a href="https://github.com/travishenson" target="_blank" rel="noreferrer">
    <FaGithub style={{width: width, height: height, color: color}} />
  </a>
);

export default GithubIcon;
