import { styled } from "@material-ui/styles";
import { graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";

const ProfilePicture = styled(Img)({
  width: "150px",
  height: "150px",
  borderRadius: "50%"
});

export interface ProfileImageFragmentProps {
  profileImage: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

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

export default ProfilePicture;
