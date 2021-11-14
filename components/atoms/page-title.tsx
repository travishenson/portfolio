import React from 'react';

const PageTitle: React.FC<{title: string}> = ({title}: {title: string}) => (
  <h2 style={{marginBottom: '35px'}}>{title}</h2>
);

export {PageTitle};