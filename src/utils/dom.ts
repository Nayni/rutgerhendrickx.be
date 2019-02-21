import React from "react";

import throttle from "lodash.throttle";

export const canUseDOM = () => {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
};

const getScrollPosition = () => {
  return canUseDOM()
    ? {
        x: window.pageXOffset,
        y: window.pageYOffset
      }
    : {
        x: 0,
        y: 0
      };
};

export const useWindowScrollPosition = ({
  throttleMs = 100
}: { throttleMs?: number } = {}) => {
  const initialScrollPosition = getScrollPosition();
  const [scroll, setScroll] = React.useState(initialScrollPosition);

  const handle = throttle(() => {
    setScroll(getScrollPosition());
  }, throttleMs);

  React.useEffect(() => {
    if (!canUseDOM()) {
      return;
    }

    window.addEventListener("scroll", handle);

    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, []);

  return scroll;
};
