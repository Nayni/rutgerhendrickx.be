import React from "react";

interface StickyHeaderDetectionOptions {
  yOffset: number;
}

const useStickyHeaderDetection = ({
  yOffset
}: StickyHeaderDetectionOptions) => {
  const [pageYOffset, setPageYOffset] = React.useState(window.pageYOffset);

  const onScroll = () => {
    setPageYOffset(window.pageYOffset);
  };

  React.useEffect(() => {
    if (!window) {
      return;
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  return pageYOffset > yOffset;
};

export default useStickyHeaderDetection;
