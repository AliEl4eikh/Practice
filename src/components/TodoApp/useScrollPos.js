import { useLayoutEffect, useState } from "react";

export const useScrollPos = () => {
  const [scrollPos, setScrollPos] = useState({
    x: 0,
    y: 0
  });
  useLayoutEffect(() => {
    const getScrollPos = () =>
      setScrollPos({
        x: window.pageXOffset,
        y: window.pageYOffset
      });
    window.addEventListener("scroll", getScrollPos);
    return () => window.removeEventListener("scroll", getScrollPos);
  }, []);
  return scrollPos;
};