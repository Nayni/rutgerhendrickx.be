import { graphql } from "gatsby";

export const CONTACT_IMAGE_FRAGMENT = graphql`
  fragment ContactImageFragment on Query {
    contactImage: file(relativePath: { eq: "mailbox.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
