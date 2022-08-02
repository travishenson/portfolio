import React, {useState} from 'react';
import {MailIcon} from '@heroicons/react/outline';

const EmailButton: React.FC = () => {
  const [emailButtonText, setEmailButtonText] = useState('Copy Email');

  const handleEmailClick = () => {
    setEmailButtonText('Copied!');
    navigator.clipboard.writeText('hello@travishenson.com');

    setTimeout(() => setEmailButtonText('Copy Email'), 3000);
  };

  return (
    <button
      onClick={handleEmailClick}
      className="font-outfit inline-flex items-center bg-transparent border border-brand-grey-300 text-brand-grey-300 rounded-2xl py-0.5 px-5 transition-all duration-200 w-[150px] hover:bg-brand-grey-100 hover:border-brand-grey-100 hover:text-brand-grey-900"
    >
      <MailIcon className="w-5 h-5" />
      <span className="ml-1 flex-1 text-sm">{emailButtonText}</span>
    </button>
  );
};

export {EmailButton};
