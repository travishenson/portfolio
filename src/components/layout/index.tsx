import React, {ReactNode} from 'react';

import '@fontsource/outfit';
import '@fontsource/inter/variable-full.css';

import {Navbar} from './navbar';
import {Footer} from './footer';

interface LayoutProps {
  path: string;
  children: ReactNode;
  isHomePage?: boolean;
  isProjectPage?: boolean;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  path,
  children,
  isHomePage = false,
  isProjectPage = false,
  title,
}: LayoutProps) => {
  console.log('What are you doing here? 🤨');
  const currentSlug = path ? path.split('/')[1] : '/';

  return (
    <div className="bg-brand-grey-900 text-brand-grey-100 flex flex-col min-h-screen relative w-full z-0">
      <header>
        <Navbar currentSlug={currentSlug} isProjectPage={isProjectPage} />
      </header>
      <main
        className={`flex-1 mx-auto pb-20 w-full z-0 ${
          isProjectPage || isHomePage ? '' : 'max-w-content my-8 px-12 pt-[100px] md:pt-[150px]'
        }`}
      >
        {title ? (
          <div className="flex items-center max-w-screen-lg mx-auto">
            <h1 className="text-4xl md:text-5xl">{title}</h1>
            <div className="flex-grow ml-8 border-t border-brand-grey-700" />
          </div>
        ) : null}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
