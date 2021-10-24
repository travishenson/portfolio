import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';

import { Navbar } from './molecules/navbar';
import { Footer } from './molecules/footer';

interface LayoutProps {
  pageTitle: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  children,
}: LayoutProps) => (
  <>
    <NextSeo
      title={
        pageTitle === 'Home' ? 'Travis Henson | JavaScript Developer' : `${pageTitle} | Travis Henson`
      }
    />
    <header>
      <Navbar />
    </header>
    <div className="page-content">{children}</div>
    <Footer />
  </>
);

export default Layout;
