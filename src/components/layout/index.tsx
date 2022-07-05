import React, {ReactNode} from 'react';

import '@fontsource/outfit';
import '@fontsource/inter/variable-full.css';

import {Navbar} from './navbar';
import {Footer} from './footer';

interface LayoutProps {
  path: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({path, children}: LayoutProps) => {
  const currentSlug = path ? path.split('/')[1] : '/';

  return (
    <div className="bg-brand-grey-900 text-brand-grey-100 flex flex-col min-h-screen pt-4 relative w-full z-0">
      <header>
        <Navbar currentSlug={currentSlug} />
        {/* <MobileNavbar />  */}
      </header>
      <main className="flex-1 my-8 mx-auto px-16 pt-[100px] pb-20 w-full max-w-content z-0">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
