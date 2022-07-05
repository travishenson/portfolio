import React, {useState} from 'react';
import {MailIcon} from './icons';

const EmailButton: React.FC = () => {
  const [emailButtonText, setEmailButtonText] = useState('Copy Email');
  const [iconColor, setIconColor] = useState('#BDBDBD');

  const handleEmailClick = () => {
    setEmailButtonText('Copied!');
    navigator.clipboard.writeText('hello@travishenson.com');

    setTimeout(() => setEmailButtonText('Copy Email'), 3000);
  };

  return (
    <button
      onClick={handleEmailClick}
      onMouseEnter={() => setTimeout(() => setIconColor('#1A1A1A'), 50)}
      onMouseLeave={() => setTimeout(() => setIconColor('#BDBDBD'), 50)}
      className="inline-flex items-center bg-transparent border border-brand-grey-300 text-brand-grey-300 rounded-2xl text-sm py-1 px-5 transition-all duration-200 w-[150px] hover:bg-brand-grey-100 hover:border-brand-grey-100 hover:text-brand-grey-900"
    >
      <MailIcon width="20px" height="20px" color={iconColor} style="outline" />
      <span className="ml-2 flex-1">{emailButtonText}</span>
    </button>
  );
};

export {EmailButton};
