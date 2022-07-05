import React from 'react';

// Icons
import {IoMail} from 'react-icons/io5';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer: React.FC = () => {
  const iconClassName =
    'w-[25px] h-[25px] fill-brand-grey-300 hover:fill-brand-grey-100';

  return (
    <footer className="flex h-[200px]">
      <div className="flex flex-col justify-center w-full max-w-content mx-auto border-t border-brand-grey-700">
        <div className="flex gap-5 my-4 mx-auto">
          <a href="mailto:hello@travishenson.com">
            <IoMail className={iconClassName} />
          </a>
          <a
            href="https://github.com/travishenson"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={iconClassName} />
          </a>
          <a
            href="https://linkedin.com/in/travisghenson"
            target="_blank"
            rel="noreferrer"
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
