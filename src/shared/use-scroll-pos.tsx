import React, {useState, useEffect} from 'react';

export const useScrollPos = (): {
  direction: 'Up' | 'Down' | null;
  position: number;
} => {
  const [scrollDir, setScrollDir] = useState<'Up' | 'Down' | null>(null);
  const [scrollPos, setScrollPos] = useState<number>(0);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      setScrollPos(scrollY);

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'Down' : 'Up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return {
    direction: scrollDir,
    position: scrollPos,
  };
};
