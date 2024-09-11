import { useState, useEffect } from "react";

const useWindowSize = () => {
  const isClient = typeof window === "object"; // Ensure window is defined

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false; // Return early if not running in the browser
    }

    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize(getSize());
      }, 150); // Debounce the resize by 150ms
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [isClient]);

  return windowSize;
};

export default useWindowSize;
