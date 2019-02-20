import React from "react";

import { canUseDOM } from "../../utils";

interface StickyHeaderDetectionOptions {
  yOffset: number;
}

const useStickyHeaderDetection = ({
  yOffset
}: StickyHeaderDetectionOptions) => {
  const currentPageYOffset = canUseDOM() ? window.pageYOffset : 0;
  const [pageYOffset, setPageYOffset] = React.useState(currentPageYOffset);

  const onScroll = () => {
    if (canUseDOM()) {
      setPageYOffset(window.pageYOffset);
    }
  };

  React.useEffect(() => {
    if (!canUseDOM()) {
      return;
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  return pageYOffset > yOffset;
};

export default useStickyHeaderDetection;
