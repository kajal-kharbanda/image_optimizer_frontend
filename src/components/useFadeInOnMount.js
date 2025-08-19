import { useEffect, useState } from 'react';

const useFadeInOnMount = (delay=0) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay); // slight delay
    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible;
};

export default useFadeInOnMount;
