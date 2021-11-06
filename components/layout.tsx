import React, { ReactNode, useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { useLoadingOverlayContext } from '../context/loading-overlay-context';
import Loader from 'react-loaders';

import { Navbar } from './molecules/navbar';
import { MobileNav } from './molecules/mobile-nav';
import { Footer } from './molecules/footer';

interface LayoutProps {
  pageTitle: string;
  children: ReactNode;
}

interface LoadingOverlayProps {
  shouldShow: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  shouldShow,
}: LoadingOverlayProps) => {
  const [overlayClass, setOverlayClass] = useState<string>('loading-overlay-show');

  const loader = <Loader type="ball-pulse" active />;

  useEffect(() => {
    if (shouldShow) {
      setOverlayClass('loading-overlay-show');
    } else {
      setOverlayClass('loading-overlay-hidden');
    }
  }, [shouldShow]);

  return (
    <div className={`loading-overlay ${overlayClass}`}>
      <img src="/images/logo.png" width="50px" height="50px" />
      <div>{loader}</div>
    </div>
  );
};

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  children,
}: LayoutProps) => {
  const { isLoading, setIsLoading } = useLoadingOverlayContext();

  useEffect(() => setIsLoading(false), []);

  return (
    <>
      <NextSeo
        title={
          pageTitle === 'Home'
            ? 'Travis Henson | JavaScript Developer'
            : `${pageTitle} | Travis Henson`
        }
      />
      <LoadingOverlay shouldShow={isLoading} />
      <header>
        <Navbar />
      </header>
      <div
        className={pageTitle === 'Home' ? 'page-content-home' : 'page-content'}
      >
        {children}
      </div>
      <MobileNav />
      <Footer />
    </>
  );
};

export default Layout;
