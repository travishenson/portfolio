import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { IconProps } from '.';

const DownArrowIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
}: IconProps) => (
  <FaArrowDown style={{ width: width, height: height, color: color }} />
);

export default DownArrowIcon;
