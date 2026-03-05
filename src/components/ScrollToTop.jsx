import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollUp = () => {
      // Prova tutti i metodi possibili per resettare lo scroll del body
      document.body.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      window.scrollTo(0, 0);
    };

    scrollUp();
    // Piccolo delay di sicurezza per contenuti dinamici
    const timer = setTimeout(scrollUp, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
