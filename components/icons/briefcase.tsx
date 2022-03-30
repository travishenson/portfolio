import React from 'react';
import {IoBriefcaseOutline, IoBriefcase} from 'react-icons/io5';
import {IconProps} from '.';

const BriefcaseIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  style,
}: IconProps) => {
  if (style === 'outline') {
    return (
      <IoBriefcaseOutline style={{width: width, height: height, color: color}} />
    );
  }
  return (
    <IoBriefcase style={{width: width, height: height, color: color}} />
  );
};

export default BriefcaseIcon;
