import React from 'react';
import {IoHomeOutline, IoHomeSharp} from 'react-icons/io5';
import { IconProps } from '.';

const HomeIcon: React.FC<IconProps> = ({ width, height, color, style }: IconProps) => {
  if (style === 'outline') {
    return (
      <IoHomeOutline style={{ width: width, height: height, color: color }} />
    );
  }
  return (
    <IoHomeSharp style={{ width: width, height: height, color: color }} />
  );
};

export default HomeIcon;
