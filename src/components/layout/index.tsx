import React, {ReactNode} from 'react';

import '@fontsource/outfit';
import '@fontsource/inter/variable-full.css';

import {Navbar} from './navbar';
import {Footer} from './footer';

interface LayoutProps {
  path: string;
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  path,
  children,
  title,
}: LayoutProps) => {
  console.log('What are you doing here? 🤨');
  const currentSlug = path ? path.split('/')[1] : '/';

  const isHome = currentSlug === '';
  const isFullWidthPage = isHome;

  return (
    <div className="bg-brand-grey-900 text-brand-grey-100 flex flex-col min-h-screen relative w-full z-0">
      <header>
        <Navbar currentSlug={currentSlug} isFullWidthPage={isFullWidthPage} />
      </header>
      <main
        className={`flex-1 mx-auto pb-20 w-full z-0 ${
          isFullWidthPage ? '' : 'max-w-content my-8 px-12 pt-[100px]'
        }`}
      >
        {title ? (
          <h1 className="text-[2.074rem] md:text-[3.157rem]">{title}</h1>
        ) : null}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
