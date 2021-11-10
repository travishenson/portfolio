import React from 'react';
import { FaHome } from 'react-icons/fa';
import { IconProps } from '.';

const HomeIcon: React.FC<IconProps> = ({ width, height, color }: IconProps) => (
  <FaHome style={{ width: width, height: height, color: color }} />
);

export default HomeIcon;
