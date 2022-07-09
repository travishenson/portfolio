import React from 'react';
import dayjs from 'dayjs';
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiSupabase,
  SiExpo,
  SiGatsby,
} from 'react-icons/si';

export const parseProjectDates = (
  startDate: Record<string, unknown>,
  finishDate: Record<string, unknown> | null
): {start: string; finish: string} => {
  const rawStartDate = String(startDate);
  const rawFinishDate = String(finishDate);

  return {
    start: dayjs(rawStartDate).format('MMM YYYY'),
    finish: finishDate ? dayjs(rawFinishDate).format('MMM YYYY') : 'Present',
  };
};

export const textToIcon = (text: string): JSX.Element | null => {
  const iconStyle = {
    fontSize: '150%',
    margin: '0 5px',
  };

  let icon: JSX.Element | null;

  switch (text) {
    case 'TypeScript':
      icon = <SiTypescript title="TypeScript" />;
      break;
    case 'React':
      icon = <SiReact title="React.js" />;
      break;
    case 'GraphQL':
      icon = <SiGraphql title="GraphQL" />;
      break;
    case 'Tailwind':
      icon = <SiTailwindcss title="Tailwind CSS" />;
      break;
    case 'Supabase':
      icon = <SiSupabase title="Supabase" />;
      break;
    case 'Gatsby':
      icon = <SiGatsby title="Gatsby" />;
      break;
    case 'Expo':
      icon = <SiExpo title="Expo" />;
      break;
    default:
      return null;
  }

  return (
    <div className="flex flex-row items-center px-4">
      <div style={iconStyle}>{icon}</div>
      <div className="font-outfit ml-1">{text}</div>
    </div>
  );
};
