import React from "react";

import { FluidObject } from "gatsby-image";

import { graphql } from "gatsby";
import HeroContainer from "./HeroContainer";
import HeroImage from "./HeroImage";
import HeroOverlay from "./HeroOverlay";

interface HeroProps {
  imgFluid: FluidObject;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ imgFluid, children }) => {
  return (
    <HeroContainer>
      <HeroImage fluid={imgFluid} />
      <HeroOverlay>{children}</HeroOverlay>
    </HeroContainer>
  );
};

export interface HeroImageFragmentProps {
  heroImage: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export const HERO_IMAGE_FRAGMENT = graphql`
  fragment HeroImageFragment on Query {
    heroImage: file(relativePath: { eq: "header-img.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 350, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Hero;
