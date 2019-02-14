import { graphql } from "gatsby";

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
