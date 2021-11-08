import { useMediaQuery } from 'react-responsive';

export const useScreenSize = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  });

  return {
    isMobile
  }
}