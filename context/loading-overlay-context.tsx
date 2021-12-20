import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import {useRouter} from 'next/router';

interface LoadingOverlayContextProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingOverlayContext = createContext<LoadingOverlayContextProps>({
  isLoading: true,
  setIsLoading: () => null,
});

interface LoadingOverlayContextProviderProps {
  children?: React.ReactNode;
}

const LoadingOverlayProvider: React.FC = ({
  children,
}: LoadingOverlayContextProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsLoading(true));
    router.events.on('routeChangeComplete', () => setIsLoading(false));
  }, [router.events]);

  useEffect(() => setIsLoading(false), [])

  return (
    <LoadingOverlayContext.Provider value={{isLoading, setIsLoading}}>
      {children}
    </LoadingOverlayContext.Provider>
  );
};

const useLoadingOverlayContext: () => LoadingOverlayContextProps = () =>
  useContext(LoadingOverlayContext);

export {LoadingOverlayProvider, useLoadingOverlayContext};
