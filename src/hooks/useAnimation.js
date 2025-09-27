import { useEffect, useRef } from 'react';

const useAnimation = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      // Trigger animation after a small delay
      const timer = setTimeout(() => {
        element.classList.add('animate-in');
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  return elementRef;
};

export default useAnimation;
