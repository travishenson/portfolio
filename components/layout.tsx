import React, {ReactNode} from 'react';
import {NextSeo} from 'next-seo';

import {Navbar} from './molecules/navbar';
import {MobileNavbar} from './molecules/mobile-nav/mobile-navbar';
import {Footer} from './molecules/footer';

interface LayoutProps {
  pageTitle: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  children,
}: LayoutProps) => {
  // Formats page title based on current route
  const formattedPageTitle =
    pageTitle === 'Home'
      ? 'Travis Henson | JavaScript Developer'
      : `${pageTitle} | Travis Henson`;

  const wrapperClass = `main-wrapper ${
    pageTitle === 'Home' ? 'bg-pattern' : ''
  }`;

  return (
    <>
      <NextSeo title={formattedPageTitle} />
      <div className={wrapperClass}>
        <header>
          <Navbar />
          <MobileNavbar />
        </header>
        <div className="content">
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
