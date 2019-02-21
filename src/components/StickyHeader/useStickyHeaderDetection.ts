import { useWindowScrollPosition } from "../../utils";

interface StickyHeaderDetectionOptions {
  yOffset: number;
}

const useStickyHeaderDetection = ({
  yOffset
}: StickyHeaderDetectionOptions) => {
  const scrollPosition = useWindowScrollPosition({ throttleMs: 100 });

  return scrollPosition.y > yOffset;
};

export default useStickyHeaderDetection;
