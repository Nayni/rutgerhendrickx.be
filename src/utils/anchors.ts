import React from "react";

import animateScrollTo from "animated-scroll-to";

import { useHistory } from "./history";

export interface ScrollableAnchorProps {
  href: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface ScrollableAnchorOptions {
  anchor: string;
  beforeScrollAnimation?: React.MouseEventHandler<HTMLAnchorElement>;
  afterScrollAnimation?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const useAutoScrollToAnchor = () => {
  const { location } = useHistory();

  React.useEffect(() => {
    if (location.hash) {
      const elementId = normalizeElementId(location.hash);
      const el = document.getElementById(elementId);

      if (el) {
        animateScrollTo(el);
      }
    }
  }, [location]);
};

export const useScrollableAnchor = ({
  anchor,
  beforeScrollAnimation,
  afterScrollAnimation
}: ScrollableAnchorOptions): ScrollableAnchorProps => {
  const { navigate } = useHistory();

  const href = normalizeAnchorHref(anchor);
  const elementId = normalizeElementId(anchor);

  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (beforeScrollAnimation) {
      beforeScrollAnimation(event);
    }

    event.preventDefault();

    const el = document.getElementById(elementId);

    if (!el) {
      return;
    }

    animateScrollTo(el, {
      onComplete: () => {
        navigate(href);
        if (afterScrollAnimation) {
          afterScrollAnimation(event);
        }
      }
    });
  };

  return {
    href,
    onClick
  };
};

export const normalizeAnchorHref = (href: string) =>
  `#${normalizeElementId(href)}`;

export const normalizeElementId = (id: string) =>
  (id && id.replace(/^#/, "")) || "";
