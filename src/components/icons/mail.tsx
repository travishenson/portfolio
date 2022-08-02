import React from 'react';
import {IoMail, IoMailOutline} from 'react-icons/io5';
import {IconProps} from '.';

const MailIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  style,
}: IconProps) => {
  if (style === 'outline') {
    return (
      <IoMailOutline style={{width: width, height: height, color: color}} />
    );
  }
  return (
    <IoMail
      style={{width: width, height: height, color: color}}
      className="fill-brand-grey-300 hover:fill-brand-grey-100"
    />
  );
};

export default MailIcon;
