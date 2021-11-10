import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa';
import { IconProps } from '.';

const AstronautIcon: React.FC<IconProps> = ({ width, height, color }: IconProps) => (
  <FaUserAstronaut style={{ width: width, height: height, color: color }} />
);

export default AstronautIcon;
