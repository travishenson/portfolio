import React from 'react';

// Icons
import {IoMail} from 'react-icons/io5';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer: React.FC = () => {
  const iconClassName =
    'w-[25px] h-[25px] fill-brand-grey-300 hover:fill-brand-grey-100';

  return (
    <footer className="flex h-[150px] md:h-[200px] bg-brand-grey-900">
      <div className="flex flex-col justify-center gap-5 w-full max-w-content mx-auto border-t border-brand-grey-700">
        <div className="flex gap-5 mx-auto">
          <a href="mailto:hello@travishenson.com" aria-label="Send email to hello@travishenson.com">
            <IoMail className={iconClassName} />
          </a>
          <a
            href="https://github.com/travishenson"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub className={iconClassName} />
          </a>
          <a
            href="https://linkedin.com/in/travisghenson"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className={iconClassName} />
          </a>
        </div>
        <div className="flex flex-col gap-1 text-center text-xs mt-2">
          <span>&copy; Travis Henson {new Date().getFullYear()}</span>
          <span>Designed and Developed by Travis Henson.</span>
        </div>
      </div>
    </footer>
  );
};

export {Footer};
