import React, {useState} from 'react';
import {MailIcon} from '../icons';

const EmailButton: React.FC = () => {
  const [emailButtonText, setEmailButtonText] = useState('Copy Email');
  const [iconColor, setIconColor] = useState('#BDBDBD');

  const handleEmailClick = () => {
    setEmailButtonText('Email Copied!');
    navigator.clipboard.writeText('hello@travishenson.com');

    setTimeout(() => setEmailButtonText('Copy Email'), 3000);
  };

  return (
    <button
      onClick={handleEmailClick}
      onMouseEnter={() => setTimeout(() => setIconColor('#1A1A1A'), 50)}
      onMouseLeave={() => setTimeout(() => setIconColor('#BDBDBD'), 50)}
      className="email-button"
    >
      <MailIcon width="20px" height="20px" color={iconColor} style="outline" />
      <span>{emailButtonText}</span>
    </button>
  );
};

export {EmailButton};
