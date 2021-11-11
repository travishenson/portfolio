import React from 'react';
import { IoDocumentTextOutline, IoDocumentText } from 'react-icons/io5';
import { IconProps } from '.';

const DocumentIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  style,
}: IconProps) => {
  if (style === 'outline') {
    return (
      <IoDocumentTextOutline style={{ width: width, height: height, color: color }} />
    );
  }
  return (
    <IoDocumentText style={{ width: width, height: height, color: color }} />
  );
};

export default DocumentIcon;