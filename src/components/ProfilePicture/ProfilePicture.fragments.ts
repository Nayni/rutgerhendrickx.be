import { graphql } from "gatsby";

export const PROFILE_IMAGE_FRAGMENT = graphql`
  fragment ProfileImageFragment on Query {
    profileImage: file(relativePath: { eq: "rhendrickx-profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 150, maxHeight: 150, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
