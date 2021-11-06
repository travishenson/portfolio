import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingOverlayContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingOverlayContext.Provider>
  );
};

const useLoadingOverlayContext: () => LoadingOverlayContextProps = () =>
  useContext(LoadingOverlayContext);

export { LoadingOverlayProvider, useLoadingOverlayContext };
