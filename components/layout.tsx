import React, { ReactNode, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
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
  const loader = <Loader type="ball-pulse" active />;

  return (
    <div
      className={`loading-overlay ${
        shouldShow ? '' : 'loading-overlay-hidden'
      }`}
    >
      <div>{loader}</div>
    </div>
  );
};

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  children,
}: LayoutProps) => {
  const { isLoading, setIsLoading } = useLoadingOverlayContext();

  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };
    const handleComplete = () => {
      setTimeout(() => setIsLoading(false), 1000);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

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
      <div className={pageTitle === 'Home' ? 'page-content-home' : 'page-content'}>
        {children}
      </div>
      <MobileNav />
      <Footer />
    </>
  );
};

export default Layout;
