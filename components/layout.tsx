import React, { ReactNode, useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Loader from 'react-loaders';

import { useLoadingOverlayContext } from '../context/loading-overlay-context';
import { useScreenSize } from '../hooks/use-screen-size';

import { Navbar } from './molecules/navbar';
import { MobileNavbar } from './molecules/mobile-navbar';
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
  const [overlayClass, setOverlayClass] = useState<string>(
    'loading-overlay-show'
  );

  const loader = <Loader type="ball-pulse" active />;

  useEffect(() => {
    if (shouldShow) {
      setOverlayClass('loading-overlay-show');
      document.body.classList.add('no-scroll');
    } else {
      setOverlayClass('loading-overlay-hidden');
      document.body.classList.remove('no-scroll');
    }
  }, [shouldShow]);

  return (
    <div className={`loading-overlay ${overlayClass}`}>
      <Image
        src="/images/logo.png"
        width="50px"
        height="50px"
        alt="Travis Henson logo"
      />
      <div>{loader}</div>
    </div>
  );
};

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  children,
}: LayoutProps) => {
  const { isLoading, setIsLoading } = useLoadingOverlayContext();
  const { isMobile } = useScreenSize();

  // Formats page title based on current route
  const formattedPageTitle =
    pageTitle === 'Home'
      ? 'Travis Henson | JavaScript Developer'
      : `${pageTitle} | Travis Henson`;

  const wrapperClass = `main-wrapper ${
    pageTitle === 'Home' ? 'bg-pattern' : ''
  }`;

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, [setIsLoading]);

  return (
    <>
      <NextSeo title={formattedPageTitle} />
      <LoadingOverlay shouldShow={isLoading} />
      <div className={wrapperClass}>
        <header>
          <Navbar />
          {isMobile ? <MobileNavbar /> : null}
        </header>
        <div
          className={
            pageTitle === 'Home' ? 'page-content-home' : 'page-content'
          }
        >
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
