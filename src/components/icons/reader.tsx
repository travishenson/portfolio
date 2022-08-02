import React from 'react';
import {IoReaderOutline, IoReader} from 'react-icons/io5';
import {IconProps} from '.';

const ReaderIcon: React.FC<IconProps> = ({width, height, color, style}: IconProps) => {
  if (style === 'outline') {
    return (
      <IoReaderOutline style={{width: width, height: height, color: color}} />
    );
  }
  return <IoReader style={{width: width, height: height, color: color}} />;
};

export default ReaderIcon;
