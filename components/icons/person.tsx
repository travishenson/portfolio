import React from 'react';
import {IoPerson, IoPersonOutline} from 'react-icons/io5';
import {IconProps} from '.';

const HomeIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  style,
}: IconProps) => {
  if (style === 'outline') {
    return (
      <IoPersonOutline style={{width: width, height: height, color: color}} />
    );
  }
  return (
    <IoPerson style={{width: width, height: height, color: color}} />
  );
};

export default HomeIcon;
