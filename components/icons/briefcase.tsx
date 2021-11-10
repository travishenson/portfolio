import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { IconProps } from '.';

const BriefcaseIcon: React.FC<IconProps> = ({ width, height, color }: IconProps) => (
  <FaBriefcase style={{ width: width, height: height, color: color }} />
);

export default BriefcaseIcon;
