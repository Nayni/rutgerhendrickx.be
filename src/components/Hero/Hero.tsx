import React from "react";

import { FluidObject } from "gatsby-image";

import HeroContainer from "./HeroContainer";
import HeroImage from "./HeroImage";
import HeroOverlay from "./HeroOverlay";

export interface HeroImageFragmentProps {
  heroImage: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

interface HeroProps {
  imgFluid: FluidObject;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ imgFluid, children }) => {
  return (
    <HeroContainer>
      <HeroImage fluid={imgFluid} />
      <HeroOverlay>
        <div>{children}</div>
      </HeroOverlay>
    </HeroContainer>
  );
};

export default Hero;
